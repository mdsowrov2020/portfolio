"use client";

import { motion } from "framer-motion";

import Wrapper from "../common/Wrapper";

import { Cover } from "../ui/cover";
import { ContainerTextFlip } from "../ui/container-text-flip";

import { Compare } from "../ui/compare";

const Hero = () => {
  return (
    <div className="w-full flex items-center justify-center min-h-[80vh] lg:min-h-screen px-4">
      <Wrapper className="flex flex-col-reverse lg:flex-row items-center justify-between w-full px-10 lg:px-0 gap-8 lg:gap-16">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
          className="w-full lg:w-1/2 text-center lg:text-left order-1"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white leading-tight">
            {/* <span className="block mb-2 text-base md:text-lg lg:text-xl text-neutral-600 dark:text-neutral-300 font-medium">
              Crafting digital excellence
              
            </span> */}
            Hello! <br /> I&apos;m{" "}
            <Cover>
              <span className="text-blue-600 dark:text-blue-400">
                Md Sowrov
              </span>
            </Cover>
            {/* <span className="block mt-2 dark:text-neutral-100">
              Frontend Engineer
            </span> */}
          </h1>

          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 mt-6 font-medium">
            I build{" "}
            <span className="font-semibold text-neutral-800 dark:text-neutral-100">
              digital experiences
            </span>{" "}
            that are{" "}
            <ContainerTextFlip
              words={["fast", "intuitive", "engaging", "responsive"]}
              className="inline-block text-base sm:text-lg md:text-xl"
              textClassName="text-neutral-800 dark:text-neutral-100 font-semibold"
            />
          </h2>

          <motion.p
            className="text-neutral-500 dark:text-neutral-400 mt-4 text-sm sm:text-base italic  px-4 sm:px-10 md:px-16 lg:px-0 lg:max-w-xl lg:mx-0 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Specializing in React ecosystems, I transform complex requirements
            into{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              intuitive interfaces
            </span>{" "}
            that users love 💖.
          </motion.p>
        </motion.div>

        {/* Right Compare Image */}
        <div className="w-full lg:w-1/2 flex justify-center order-2">
          <div className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] p-3 border rounded-3xl bg-neutral-100 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800">
            <Compare
              firstImage="/first.png"
              secondImage="/second.png"
              firstImageClassName="object-cover object-left-top"
              secondImageClassname="object-cover object-left-top"
              className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]"
              slideMode="hover"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Hero;
