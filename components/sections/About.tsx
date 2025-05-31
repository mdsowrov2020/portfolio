"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";

import Wrapper from "../common/Wrapper";

import { MagicCard } from "../magicui/magic-card";
import { CoolMode } from "../magicui/cool-mode";

import { Lens } from "../ui/lens";
import Image from "next/image";
import CustomButton from "../common/CustomButton";

const About = () => {
  const { theme } = useTheme();

  const skillCards = [
    {
      icon: (
        <svg
          className="h-5 w-5 text-blue-600 dark:text-blue-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      ),
      title: "Clean Code",
      description: "Maintainable solutions",
    },
    {
      icon: (
        <svg
          className="h-5 w-5 text-purple-600 dark:text-purple-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M16 4H8a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2z" />
        </svg>
      ),
      title: "Component Architecture",
      description: "Reusable systems",
    },
    {
      icon: (
        <svg
          className="h-5 w-5 text-green-600 dark:text-green-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Performance",
      description: "Optimized experiences",
    },
  ];
  const [hovering, setHovering] = useState(false);
  return (
    <div className="w-full box-border">
      <Wrapper className="">
        <div className="grid grid-cols-12 md:grid-cols-12 gap-8 items-center">
          <div className="relative col-span-12 md:col-span-4 w-full  max-w-xs mx-auto rounded-2xl overflow-hidden shadow-xl z-10 sm:mx-0">
            <Lens hovering={hovering} setHovering={setHovering}>
              <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px]">
                <Image
                  src="/bg.jpg"
                  alt="About me"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-2xl"
                  priority
                />
              </div>
            </Lens>
          </div>

          <div className="col-span-12 md:col-span-8 w-full">
            <MagicCard
              className="h-full rounded-2xl bg-transparent "
              gradientColor={theme === "dark" ? "#262626" : "#d9d9d990"}
            >
              <div className="p-6 sm:p-8 h-full flex flex-col justify-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4 sm:mb-6 text-neutral-800 dark:text-neutral-200">
                  Translating Vision into Interactive Reality
                </h2>

                <p className="text-sm sm:text-base md:text-md font-medium text-neutral-600 dark:text-neutral-400 mb-6 sm:mb-8 leading-relaxed">
                  As a software craftsman, I specialize in forging elegant web
                  applications with modern technologies. My anvil is React, my
                  hammer is TypeScript, and my fire is the passion for creating
                  pixel-perfect experiences.
                </p>

                <div className="my-4 sm:my-5">
                  <h5 className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300">
                    Tools I Master to Build the Modern Web
                  </h5>
                  <div className="flex flex-wrap gap-3 mt-4 sm:mt-5">
                    {[
                      "React",
                      "Next.js",
                      "JavaScript",
                      "TypeScript",
                      "Tailwind CSS",
                      "Psd/Xd/Image/Any prototype to markup",
                      "Redux",
                      "Express",
                      "Responsive Design",
                      "PostgresSql",
                    ].map((tech) => (
                      <p
                        key={tech}
                        className="
                        inline-block rounded-full px-4 py-1 text-xs sm:text-sm font-medium text-center
                        border border-gray-200/40 dark:border-gray-700/60
                        bg-gray-100/30 dark:bg-gray-900/40
                        text-neutral-700 dark:text-neutral-300
                        backdrop-blur-md shadow-inner
                        hover:scale-105 transition-all duration-200
                      "
                      >
                        {tech}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  {skillCards.map((skill, index) => (
                    <div
                      key={index}
                      className="relative p-5 rounded-xl overflow-hidden group transition-all"
                    >
                      <div
                        className="
                        absolute inset-0
                        bg-gray-100/30 dark:bg-gray-900/40
                        backdrop-blur-lg
                        border border-gray-200/40 dark:border-gray-700/60
                        rounded-xl
                        group-hover:bg-gray-100/40 dark:group-hover:bg-gray-900/50
                        transition-colors duration-300
                        shadow-md
                      "
                      />
                      <div className="relative z-10 text-center flex flex-col items-center">
                        <div
                          className="
                          mb-3 flex h-12 w-12 items-center justify-center
                          rounded-full
                          bg-gray-200/50 dark:bg-gray-800/60
                          backdrop-blur-md shadow-inner
                        "
                        >
                          {skill.icon}
                        </div>
                        <h5 className="text-sm sm:text-base font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
                          {skill.title}
                        </h5>
                        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="relative justify-center mt-5">
                  <CoolMode>
                    <CustomButton className="relative rounded-full font-normal px-8 py-3 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 dark:from-white dark:via-gray-100 dark:to-white text-white dark:text-gray-900 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.2)] dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 overflow-hidden group/btn before:absolute before:inset-0 before:bg-gradient-to-r before:from-indigo-400/10 dark:before:from-indigo-500/15 before:via-purple-400/10 dark:before:via-purple-500/15 before:to-cyan-400/10 dark:before:to-cyan-500/15 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700">
                      <span className="relative z-10 flex items-center gap-2">
                        Get Resume
                        <svg
                          className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300"
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
                    </CustomButton>
                  </CoolMode>
                </div>
              </div>
            </MagicCard>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default About;
