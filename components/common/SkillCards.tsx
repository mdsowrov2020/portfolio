import React from "react";

const skillCards = [
  {
    icon: "⚡",
    title: "Clean Code",
    description: "Maintainable solutions",
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: "🎯",
    title: "Component Architecture",
    description: "Reusable systems",
    color: "from-purple-500 to-pink-400",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: "🚀",
    title: "Performance",
    description: "Optimized experiences",
    color: "from-green-500 to-emerald-400",
    bgColor: "bg-green-500/10",
  },
];
const SkillCards = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {skillCards.map((skill, index) => (
        <div
          key={index}
          className="group p-6 rounded-2xl backdrop-blur-md border transition-all duration-300 cursor-pointer transform hover:scale-105 hover:-translate-y-2 bg-gray-200/30 dark:bg-gray-800/30 border-gray-300/50 dark:border-gray-700/50 dark:hover:bg-gray-800/50"
        >
          <div className="flex items-center space-x-4">
            <div
              className={`text-4xl p-3 rounded-xl bg-gradient-to-r ${skill.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
            >
              {skill.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {skill.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {skill.description}
              </p>
            </div>
            <div className="text-2xl group-hover:rotate-12 transition-transform duration-300">
              →
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillCards;
