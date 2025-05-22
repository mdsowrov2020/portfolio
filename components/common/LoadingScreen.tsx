import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const counterRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const greetingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count++;
      if (counterRef.current) counterRef.current.innerText = `${count}%`;
      if (progressRef.current) progressRef.current.style.width = `${count}%`;

      if (count >= 100) {
        clearInterval(interval);
        const tl = gsap.timeline();
        tl.to([counterRef.current, progressRef.current?.parentElement], {
          opacity: 0,
          duration: 0.5,
        })
          .set(greetingRef.current, {
            opacity: 0,
            y: 20,
            display: "block",
          })
          .to(greetingRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          })
          .to(loaderRef.current, {
            y: "-100%",
            duration: 1,
            delay: 1,
            ease: "power4.inOut",
            onComplete: () => setLoading(false),
          });
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 bg-black text-white z-[9999] flex flex-col justify-center items-center overflow-hidden"
    >
      <div ref={counterRef} className="text-5xl font-bold mb-4">
        0%
      </div>
      <div className="w-full h-2 bg-gray-800">
        <div
          ref={progressRef}
          className="h-full bg-white transition-all duration-50"
        ></div>
      </div>
      <div
        ref={greetingRef}
        className="absolute text-4xl font-semibold opacity-0 translate-y-10"
        style={{ display: "none" }}
      >
        Welcome to my universe
      </div>
    </div>
  );
}
