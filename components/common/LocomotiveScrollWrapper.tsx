"use client";

import { useRef, useState, useEffect } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

function lerp(start: number, end: number, t: number) {
  return start + (end - start) * t;
}

export default function LocomotiveScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef(null);

  // Raw scroll Y from locomotive-scroll
  const rawY = useRef(0);

  // Smoothed scroll Y state
  const [smoothY, setSmoothY] = useState(0);

  // Animation frame id to manage lerp loop
  const animationFrameId = useRef<number>(null);

  // Lerping loop for smooth scroll position
  const smoothScrollLoop = () => {
    setSmoothY((prev) => {
      const newVal = lerp(prev, rawY.current, 0.1); // Adjust 0.1 for smoothness
      return newVal;
    });
    animationFrameId.current = requestAnimationFrame(smoothScrollLoop);
  };

  // Start lerp loop on mount, cancel on unmount
  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(smoothScrollLoop);
    return () => {
      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        smartphone: { smooth: true },
        tablet: { smooth: true },
      }}
      containerRef={containerRef}
      onScroll={(args) => {
        // Update rawY with real scroll position
        rawY.current = args.scroll.y;
      }}
      watch={[]}
    >
      <main
        data-scroll-container
        ref={containerRef}
        style={{ overflow: "hidden" }}
      >
        {/* Now you can pass smoothY down via context or props if needed */}
        {children}
      </main>
    </LocomotiveScrollProvider>
  );
}
