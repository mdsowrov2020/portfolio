"use client";
import React, { useState } from "react";
import Wrapper from "../common/Wrapper";
import { CoolMode } from "../magicui/cool-mode";
import { Button } from "../ui/button";

import ContactModal from "../common/ContactModal";

const Contact = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  return (
    <Wrapper className="w-7xl ">
      {/* <BackgroundLines className="flex items-center justify-between w-full flex-col lg:flex-row px-4 relative z-50 ">
        <h2 className="bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
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
      </BackgroundLines> */}
      <div className="relative rounded-xl dark:p-8 bg-transparent dark:bg-neutral-900 text-gray-700 dark:text-white overflow-hidden dark:shadow-xl w-full">
        {/* Gradient border via pseudo-element */}
        <div className="absolute dark:inset-0 z-0 pointer-events-none before:content-[''] before:absolute before:inset-0 before:border-b before:border-r before:rounded-xl before:border-transparent before:bg-gradient-to-br before:from-transparent before:via-transparent before:to-gray-500/30 before:bg-[length:100%_100%] before:bg-no-repeat" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-7xl font-semibold mb-3">Let’s work together</h2>
            <p className="text-md text-neutral-400">
              Interested in collaborating on your next project to achieve your
              goals?
              <br />
              Shoot me a message!
            </p>
          </div>

          <CoolMode>
            <Button
              variant="secondary"
              className="px-13 py-7 rounded-full border border-black/5 bg-gray-700 text-base text-gray-100 dark:text-gray-700 transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white dark:bg-white dark:hover:bg-neutral-200"
              onClick={() => setIsContactModalOpen(true)}
            >
              Let&apos;s talk
            </Button>
          </CoolMode>
          <ContactModal
            isOpen={isContactModalOpen}
            onClose={() => setIsContactModalOpen(false)}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
