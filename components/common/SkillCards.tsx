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
    <div className="grid grid-cols-3 gap-4">
      {skillCards.map((skill, index) => (
        <div
          key={index}
          className="group text-center   p-6 rounded-md backdrop-blur-md border transition-all duration-300 cursor-pointer transform hover:scale-105 hover:-translate-y-2 bg-gray-200/30 dark:bg-gray-800/30 border-gray-300/50 dark:border-gray-700/50 dark:hover:bg-gray-800/50"
        >
          <div className="space-x-4 ">
            <div
              className="w-12 h-12 rounded-xl 
                             bg-gray-900/10 dark:bg-gray-800/30
                             backdrop-blur-xl
                             border border-gray-300/50 dark:border-gray-600/30
                             flex items-center justify-center text-2xl
                             shadow-lg shadow-gray-500/20 dark:shadow-black/30
                             group-hover:bg-gray-900/15 dark:group-hover:bg-gray-700/40
                             group-hover:border-gray-400/60 dark:group-hover:border-gray-500/40
                             group-hover:scale-110 group-hover:shadow-xl
                             transition-all duration-300 mx-auto"
            >
              {/* Inner glass reflection */}
              <div
                className="absolute inset-0.5 rounded-lg 
                               bg-gradient-to-br from-gray-100/60 to-transparent
                               dark:from-gray-600/20 dark:to-transparent"
              ></div>

              {/* Icon */}
              <span className="relative z-10 filter drop-shadow-sm">
                {skill.icon}
              </span>
            </div>
            <div className="">
              <h3 className="text-md font-light text-gray-800 dark:text-white">
                {skill.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {skill.description}
              </p>
            </div>
            {/* <div className="text-2xl group-hover:rotate-12 transition-transform duration-300">
              →
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillCards;
