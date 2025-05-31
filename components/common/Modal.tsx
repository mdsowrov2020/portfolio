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
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    // Only move the modal container, not the cursor and label
    const xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      // Only move the modal container
      xMoveContainer(pageX);
      yMoveContainer(pageY);
      // Remove cursor movement - they should stay centered in modal
    });
  }, []);

  return (
    <>
      <motion.div
        className="absolute z-50 pointer-events-none"
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        <div className=" bg-amber-50  relative ">
          <div className="h-[300px] w-full overflow-hidden  relative">
            {projects.map((project, i) => (
              <div
                className="h-[300px] w-[350px] p-10 overflow-hidden  relative transition-[top] duration-[500ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
                key={i}
                style={{ top: index * -100 + "%", background: project.color }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-[top] duration-[500ms] ease-[cubic-bezier(0.76,0,0.24,1)] p-10"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Cursor centered on entire modal - positioned outside to avoid conflicts */}
        <motion.div
          ref={cursor}
          className=" w-20 h-20 rounded-full bg-[#455CE9] text-white absolute z-20 flex items-center justify-center text-sm font-light pointer-events-none"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        />

        {/* Label centered on entire modal */}
        <motion.div
          ref={cursorLabel}
          className="bg-transparent  absolute z-30 text-white text-sm font-light pointer-events-none flex items-center justify-center"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        >
          View
        </motion.div>
      </motion.div>
    </>
  );
};

export default Modal;
