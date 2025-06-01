"use client";
import React, { useEffect, useState } from "react";

const SkillProgress = () => {
  const [activeSkill, setActiveSkill] = useState(0);

  const technologies = [
    { name: "React", level: 95, icon: "⚛️" },
    { name: "Next.js", level: 90, icon: "▲" },
    { name: "TypeScript", level: 88, icon: "📘" },
    { name: "Tailwind", level: 92, icon: "🎨" },
    { name: "Node.js", level: 85, icon: "🟢" },
    { name: "PostgreSQL", level: 80, icon: "🐘" },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % technologies.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [technologies.length]);
  return (
    <div className="space-y-4">
      <h4 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Core Technologies
      </h4>

      {technologies.map((tech, index) => (
        <div
          key={index}
          className={`relative p-3 lg:p-4 rounded-xl transition-all duration-500 cursor-pointer border ${
            activeSkill === index
              ? "bg-gray-50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-600 scale-[1.02]"
              : "bg-gray-50/50 dark:bg-gray-800/30 border-gray-200/50 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-800/40"
          }`}
          onClick={() => setActiveSkill(index)}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2 lg:space-x-3">
              <span className="text-lg lg:text-xl opacity-80">{tech.icon}</span>
              <span className="text-base lg:text-lg font-medium text-gray-900 dark:text-white">
                {tech.name}
              </span>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {tech.level}%
            </span>
          </div>

          <div className="relative h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full rounded-full bg-gray-900 dark:bg-white transition-all duration-1000 ease-out"
              style={{
                width: activeSkill === index ? `${tech.level}%` : "0%",
                opacity: activeSkill === index ? 1 : 0.7,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillProgress;
