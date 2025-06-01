"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Wrapper from "../common/Wrapper";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    // Rotating stats animation
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "Redux",
    "Express",
    "Figma to Code",
    "Responsive Design",
  ];

  const achievements = [
    { number: "50+", label: "Projects Delivered", icon: "🚀" },
    { number: "98%", label: "Client Satisfaction", icon: "⭐" },
    { number: "24/7", label: "Support Available", icon: "🔧" },
  ];

  const services = [
    {
      title: "Full-Stack Development",
      description: "End-to-end web applications with modern tech stack",
      icon: "💻",
    },
    {
      title: "UI/UX Implementation",
      description: "Pixel-perfect designs with smooth animations",
      icon: "🎨",
    },
    {
      title: "Performance Optimization",
      description: "Lightning-fast load times and smooth interactions",
      icon: "⚡",
    },
    {
      title: "API Integration",
      description: "Seamless third-party service integrations",
      icon: "🔗",
    },
  ];

  const workingPrinciples = [
    "Clean, maintainable code architecture",
    "Mobile-first responsive design",
    "Performance-driven development",
    "Continuous learning & innovation",
  ];

  return (
    <div className="min-h-screen transition-all duration-500">
      <Wrapper>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-black mb-6 text-gray-900 dark:text-white">
                ABOUT
              </h1>
              <div className="w-16 h-0.5 bg-gray-900 dark:bg-white mx-auto rounded-full mb-8 opacity-60" />
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Transforming ideas into powerful digital experiences
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column - Profile */}
              <div className="lg:col-span-5 space-y-6">
                {/* Profile Card */}
                <div className="group relative">
                  <div className="relative backdrop-blur-xl rounded-2xl p-6 border bg-gray-200/30 dark:bg-gray-800/30 border-gray-300/50 dark:border-gray-700/50 dark:hover:bg-gray-800/50 transition-all duration-500">
                    <div className="relative mb-8">
                      <div className="w-48 h-48 mx-auto rounded-xl overflow-hidden relative group/img bg-gray-100 dark:bg-gray-800">
                        <Image
                          src="/bg.jpg"
                          alt="Profile"
                          fill
                          className="object-cover transition-transform duration-700 group-hover/img:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
                      </div>
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gray-900 dark:bg-white p-2 rounded-full">
                          <div className="w-4 h-4 bg-white dark:bg-gray-900 rounded-full animate-pulse" />
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        Full-Stack Developer
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Building Tomorrow&apos;s Web Today
                      </p>

                      {/* Status Indicator */}
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-green-600 dark:text-green-400 text-sm font-medium">
                          Available for Projects
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievement Stats */}
                <div className="relative group">
                  <div className="relative backdrop-blur-xl rounded-2xl p-6 border bg-gray-200/30 dark:bg-gray-800/30 border-gray-300/50 dark:border-gray-700/50 transition-all duration-500">
                    <div className="text-center">
                      <div className="text-4xl mb-2">
                        {achievements[currentStat].icon}
                      </div>
                      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                        {achievements[currentStat].number}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {achievements[currentStat].label}
                      </div>
                    </div>
                    <div className="flex justify-center mt-4 space-x-2">
                      {achievements.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentStat
                              ? "bg-gray-900 dark:bg-white"
                              : "bg-gray-400 dark:bg-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quick Facts */}
                <div className="relative group">
                  <div className="relative backdrop-blur-xl rounded-2xl p-6 border bg-gray-200/30 dark:bg-gray-800/30 border-gray-300/50 dark:border-gray-700/50 transition-all duration-500">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
                      Quick Facts
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-400">
                          🎯 Focus
                        </span>
                        <span className="text-gray-900 dark:text-white font-medium">
                          Modern Web Apps
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-400">
                          ⚡ Specialty
                        </span>
                        <span className="text-gray-900 dark:text-white font-medium">
                          Performance
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-400">
                          🌍 Location
                        </span>
                        <span className="text-gray-900 dark:text-white font-medium">
                          Available Remotely
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-400">
                          🚀 Delivery
                        </span>
                        <span className="text-gray-900 dark:text-white font-medium">
                          Fast & Reliable
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="lg:col-span-7 space-y-6">
                {/* Main Content Card */}
                <div className="relative group">
                  <div className="relative backdrop-blur-xl rounded-2xl p-6 lg:p-8 border bg-gray-200/30 dark:bg-gray-800/30 border-gray-300/50 dark:border-gray-700/50 dark:hover:bg-gray-800/50 transition-all duration-500">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                      Crafting Digital{" "}
                      <span className="text-gray-600 dark:text-gray-300">
                        Excellence
                      </span>
                    </h3>

                    <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                      I specialize in building scalable web applications that
                      solve real business problems. From concept to deployment,
                      I handle the entire development lifecycle with a focus on
                      performance, user experience, and maintainable code
                      architecture.
                    </p>

                    {/* What I Do */}
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        What I Do Best
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {services.map((service, index) => (
                          <div
                            key={index}
                            className="group/service p-4 rounded-xl bg-gray-100/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-all duration-300"
                          >
                            <div className="text-2xl mb-2">{service.icon}</div>
                            <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                              {service.title}
                            </h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {service.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Working Principles */}
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        My Development Philosophy
                      </h4>
                      <div className="space-y-2">
                        {workingPrinciples.map((principle, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3"
                          >
                            <div className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full" />
                            <span className="text-gray-700 dark:text-gray-300">
                              {principle}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Tech Showcase */}
                    <div className="relative group">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {techStack.map((tech, index) => (
                          <span
                            key={index}
                            className="group/pill relative px-4 py-2 bg-gray-100 dark:bg-gray-800 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 cursor-pointer hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-700"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
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
