"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ScrollRevealWrapperProps {
  children: React.ReactNode;
  className?: string;
  triggerId?: string;
  animation?: gsap.TweenVars;
}

export default function ScrollRevealWrapper({
  children,
  className = "",
  triggerId,
  animation,
}: ScrollRevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const element = ref.current;
    if (!element) return;

    const anim = gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 100,
        ...animation,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: triggerId ? `#${triggerId}` : element,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      anim.kill();
    };
  }, [triggerId, animation]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
