import React from "react";
import Wrapper from "../common/Wrapper";
import { CoolMode } from "../magicui/cool-mode";
import { Button } from "../ui/button";
// import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { BackgroundLines } from "../ui/background-lines";

const Contact = () => {
  return (
    <Wrapper className="w-7xl">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 relative z-50">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Let’s Build Something <br /> Great Together
        </h2>

        <div className="relative z-50">
          <CoolMode>
            <Button
              variant="secondary"
              className="px-12 py-6 rounded-full border border-black/50 bg-gray-600 text-base text-gray-100 dark:text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/50 dark:bg-neutral-900/20 dark:hover:bg-neutral-800"
            >
              Get in touch
            </Button>
          </CoolMode>
        </div>
      </BackgroundLines>
    </Wrapper>
  );
};

export default Contact;
