"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroHighlight } from "../ui/hero-highlight";

import { Cover } from "../ui/cover";
import { ContainerTextFlip } from "../ui/container-text-flip";
import { FlipWords } from "../ui/flip-words";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-start">
      <HeroHighlight>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [20, -5, 0] }}
          transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
          className="text-2xl md:text-4xl lg:text-6xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-start px-4"
        >
          Bringing Ideas to Life Through{" "}
          <Cover>
            <FlipWords words={["Fast", "Responsive", "and Modern"]} />
          </Cover>{" "}
          Frontend Development
        </motion.h1>
      </HeroHighlight>
    </div>
  );
};

export default Hero;
