import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
// import { useTheme } from "next-themes";

export default function LoadingScreen() {
  // const { theme, resolvedTheme } = useTheme();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  // const [mounted, setMounted] = useState(false);

  // // Prevent hydration mismatch
  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // Use resolvedTheme for better detection, fallback to light if not mounted
  // const isDark = mounted ? resolvedTheme === "dark" || theme === "dark" : false;
  const isDark = true;
  const loaderRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Orbit animation
    if (orbitRef.current) {
      gsap.to(orbitRef.current, {
        rotation: 360,
        duration: 3,
        repeat: -1,
        ease: "none",
      });
    }

    // Glow pulse animation
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        scale: 1.2,
        opacity: 0.6,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 3 + 0.5;
      if (currentProgress > 100) currentProgress = 100;

      const rounded = Math.floor(currentProgress);
      setProgress(rounded);

      // Update line width
      if (lineRef.current) {
        lineRef.current.style.width = `${rounded}%`;
      }

      // Counter animation
      if (counterRef.current) {
        gsap.to(counterRef.current, {
          y: -5,
          duration: 0.15,
          yoyo: true,
          repeat: 1,
          ease: "power2.out",
        });
      }

      if (currentProgress >= 100) {
        clearInterval(interval);

        // Sophisticated exit animation
        const tl = gsap.timeline();
        tl.to(orbitRef.current, {
          scale: 0,
          rotation: 720,
          duration: 0.8,
          ease: "power2.in",
        })
          .to(
            [counterRef.current, lineRef.current],
            {
              y: 30,
              opacity: 0,
              duration: 0.5,
              ease: "power2.in",
            },
            "-=0.5"
          )
          .to(
            loaderRef.current,
            {
              opacity: 0,
              scale: 0.8,
              duration: 0.6,
              ease: "power2.inOut",
              onComplete: () => setLoading(false),
            },
            "-=0.3"
          );
      }
    }, 80);

    // Entrance animation
    gsap.set([counterRef.current, lineRef.current, orbitRef.current], {
      opacity: 0,
      scale: 0,
    });

    gsap
      .timeline()
      .to(orbitRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
      })
      .to(
        [counterRef.current, lineRef.current],
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.4"
      );

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(${
              isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)"
            } 1px, transparent 1px),
            linear-gradient(90deg, ${
              isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)"
            } 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div ref={loaderRef} className="relative flex flex-col items-center">
        {/* Orbiting elements */}
        <div className="relative mb-16">
          <div ref={orbitRef} className="w-32 h-32 relative">
            {/* Orbit path */}
            <div
              className={`absolute inset-0 border rounded-full ${
                isDark ? "border-gray-600" : "border-gray-300"
              }`}
            ></div>

            {/* Orbiting dot */}
            <div
              className={`absolute w-3 h-3 rounded-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg ${
                isDark ? "bg-gray-100" : "bg-gray-800"
              }`}
            ></div>

            {/* Center element */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={`w-4 h-4 rounded-full relative ${
                  isDark ? "bg-gray-100" : "bg-gray-800"
                }`}
              >
                <div
                  ref={glowRef}
                  className={`absolute inset-0 rounded-full opacity-30 blur-sm ${
                    isDark ? "bg-gray-100" : "bg-gray-800"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress counter */}
        <div
          ref={counterRef}
          className={`text-5xl font-light mb-12 tracking-wider transition-colors duration-300 ${
            isDark ? "text-gray-100" : "text-gray-800"
          }`}
          style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
        >
          {progress.toString().padStart(2, "0")}
        </div>

        {/* Minimalist progress line */}
        <div
          className={`w-64 h-px relative overflow-hidden ${
            isDark ? "bg-gray-700" : "bg-gray-200"
          }`}
        >
          <div
            ref={lineRef}
            className={`h-full transition-all duration-300 ease-out relative ${
              isDark ? "bg-gray-100" : "bg-gray-800"
            }`}
          >
            {/* Moving highlight */}
            <div
              className={`absolute right-0 top-0 w-8 h-full bg-gradient-to-l opacity-60 ${
                isDark
                  ? "from-gray-100 to-transparent"
                  : "from-gray-800 to-transparent"
              }`}
            ></div>
          </div>
        </div>

        {/* Subtle loading text */}
        <div
          className={`mt-8 text-xs font-light tracking-[0.3em] uppercase transition-colors duration-300 ${
            isDark ? "text-gray-500" : "text-gray-400"
          }`}
        >
          Loading
        </div>
      </div>

      {/* Corner accent */}
      <div
        className={`absolute top-8 right-8 w-2 h-2 rounded-full opacity-60 ${
          isDark ? "bg-gray-100" : "bg-gray-800"
        }`}
      ></div>
      <div
        className={`absolute bottom-8 left-8 w-2 h-2 rounded-full opacity-60 ${
          isDark ? "bg-gray-100" : "bg-gray-800"
        }`}
      ></div>
    </div>
  );
}
