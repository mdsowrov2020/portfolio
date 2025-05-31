"use client";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

type ProjectType = {
  slug: string;
  title: string;
  category: string;
  image: StaticImageData;
  color: string;
};

type ModalProps = {
  modal: {
    active: boolean;
    index: number;
  };
  projects: ProjectType[];
};

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const Modal: React.FC<ModalProps> = ({ modal, projects }) => {
  const { active, index } = modal;
  const modalContainer = useRef<HTMLDivElement | null>(null);
  const cursor = useRef<HTMLDivElement | null>(null);
  const cursorLabel = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    const xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
      xMoveCursor(pageX);
      yMoveCursor(pageY);
      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Modal container that follows cursor */}
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="w-[400px] h-[350px] absolute overflow-hidden pointer-events-none z-50"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div
          className="absolute w-full h-full transition-[top] duration-[0.5s] ease-[cubic-bezier(0.76,0,0.24,1)]"
          style={{ top: `${-index * 100}%` }}
        >
          {projects.map((project, i) => (
            <div
              key={i}
              className="w-full h-full flex items-center justify-center"
              style={{ backgroundColor: project.color }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Independent cursor circle */}
      <motion.div
        ref={cursor}
        className="w-20 h-20 rounded-full bg-[#455CE9] text-white absolute z-50 flex items-center justify-center text-sm font-light pointer-events-none"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        style={{ transform: "translate(-50%, -50%)" }}
      />

      {/* Independent cursor label */}
      <motion.div
        ref={cursorLabel}
        className="w-20 h-20 rounded-full bg-transparent text-white absolute z-50 flex items-center justify-center text-sm font-light pointer-events-none"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        style={{ transform: "translate(-50%, -50%)" }}
      >
        View
      </motion.div>
    </>
  );
};

export default Modal;
