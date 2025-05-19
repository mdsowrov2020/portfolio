"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import DummyImage from "@/public/bg.jpg";
import { useState } from "react";

const projects = [
  {
    slug: "project-one",
    title: "Modern Web App",
    category: "Development",
    image: DummyImage,
  },
  {
    slug: "project-two",
    title: "Creative Landing",
    category: "UI/UX",
    image: DummyImage,
  },
  {
    slug: "project-three",
    title: "Management System",
    category: "Development",
    image: DummyImage,
  },
];

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  return (
    <main className="text-neutral-900 dark:text-neutral-100 px-6 py-12 max-w-7xl mx-auto">
      <h1 className="text-xl font-medium mb-12">Recent Work</h1>
      <div className="work-container relative space-y-6 sm:space-y-0">
        {projects.map((item, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onMouseMove={(e) => {
              const rect = (
                e.currentTarget as HTMLDivElement
              ).getBoundingClientRect();
              setCursorPos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
              });
            }}
          >
            {/* 👇 Show floating image ONLY on mobile (no hover needed) */}
            <div className="relative w-[200px] h-[200px] sm:h-[300px] overflow-hidden rounded-lg shadow-xl sm:hidden mx-auto">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* 👇 Show floating image on hover ONLY for desktop */}
            {hoveredIndex === index && (
              <motion.div
                className="absolute h-[300px] w-[350px] overflow-hidden rounded-lg shadow-2xl pointer-events-none z-50 hidden sm:block"
                initial={{ opacity: 0 }}
                animate={{
                  x: cursorPos.x - 175,
                  y: cursorPos.y - 150,
                  opacity: 1,
                }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="350px"
                />
              </motion.div>
            )}

            {/* 👇 Work Card: Hidden on mobile, shown on sm+ */}
            <div
              className={`work hidden sm:flex justify-between items-center py-16 px-20 border border-l-transparent border-r-transparent border-b-gray-200/40 dark:border-b-gray-700/80 hover:px-16 transition-all duration-500 relative z-10 ${
                index === 0
                  ? "border-t-gray-700/40 dark:border-t-gray-700/80"
                  : ""
              }`}
            >
              <h2 className="text-6xl">{item.title}</h2>
              <p>{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
