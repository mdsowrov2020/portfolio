"use client";

import Image from "next/image";
import React, { useState } from "react";
import Wrapper from "../common/Wrapper";
import SkillCards from "../common/SkillCards";

const About = () => {
  const [hovering, setHovering] = useState(false);

  const technologies = [
    { name: "React", level: 95, color: "from-blue-400 to-blue-600" },
    { name: "Next.js", level: 90, color: "from-gray-600 to-gray-800" },
    { name: "TypeScript", level: 88, color: "from-blue-500 to-blue-700" },
    { name: "Tailwind CSS", level: 92, color: "from-cyan-400 to-cyan-600" },
    { name: "Node.js", level: 85, color: "from-green-500 to-green-700" },
    { name: "PostgreSQL", level: 80, color: "from-indigo-500 to-indigo-700" },
  ];

  return (
    <div className="min-h-screen transition-all duration-500 ">
      <Wrapper>
        <div className="relative z-10 container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center">
            {/* Profile Section */}
            <div className="space-y-8 ">
              {/* Profile Image with Lens Effect */}
              <div
                className="relative group cursor-pointer"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
              >
                <div
                  className={`relative w-full max-w-md mx-auto aspect-square rounded-3xl overflow-hidden transition-all duration-500 ${
                    hovering ? "scale-105 rotate-2" : "scale-100"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 p-1 rounded-3xl">
                    <div className="w-full h-full rounded-3xl overflow-hidden bg-gray-800 relative">
                      <Image
                        src="/bg.jpg"
                        alt="My portfolio"
                        fill
                        objectFit="cover"
                      />
                      <div
                        className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center text-6xl"
                        style={{ display: "none" }}
                      >
                        👨‍💻
                      </div>
                    </div>
                  </div>
                  {hovering && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl animate-pulse" />
                  )}
                </div>
              </div>

              {/* Skills Cards */}
              <SkillCards />
            </div>

            {/* Content Section */}
            <div className="space-y-8  ">
              {/* Main Card */}
              <div className="p-8 rounded-3xl backdrop-blur-md border shadow-2xl bg-gray-200/20 dark:bg-gray-800/20 border-gray-300/50 dark:border-gray-700/50">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
                  Crafting Digital{" "}
                  <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                    Excellence
                  </span>
                </h2>

                <p className="text-lg leading-relaxed mb-8 text-gray-700 dark:text-gray-300">
                  As a passionate software craftsman, I forge elegant web
                  applications using modern technologies. My expertise lies in
                  React, TypeScript, and creating pixel-perfect user experiences
                  that not only look stunning but perform flawlessly.
                </p>

                {/* Technology Progress Bars */}
                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                    Technology Mastery
                  </h3>
                  {technologies.map((tech, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {tech.name}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {tech.level}%
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-gray-700">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${tech.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${tech.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <button className="group relative px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden">
                    <span className="relative z-10 flex items-center space-x-2">
                      <span>Download Resume</span>
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-violet-500/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  </button>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="p-6 rounded-2xl backdrop-blur-md border bg-gray-200/20 dark:bg-gray-800/20 border-gray-300/50 dark:border-gray-700/50">
                <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                  Tech Arsenal
                </h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "HTML",
                    "CSS3",
                    "Psd/Xd/Figma to Markup",
                    "Ant Design",
                    "Node.js",
                    "PostgreSQL",
                    "Redux",
                    "Express",
                    "Responsive Design",
                  ].map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer hover:scale-110 bg-gradient-to-r from-gray-700 to-gray-600 text-gray-200 hover:from-gray-600 hover:to-gray-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default About;
