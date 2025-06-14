"use client";
import React from "react";
import Wrapper from "../common/Wrapper";
import { CoolMode } from "../magicui/cool-mode";

import CustomButton from "../common/CustomButton";
import { ContactModalNew } from "../common/ContactModalNew";
import ContactForm from "../common/ContactForm";

const Contact = () => {
  return (
    <Wrapper className="w-7xl">
      <div className="relative overflow-hidden rounded-3xl p-10 sm:p-14 bg-white/60 dark:bg-neutral-900/10 backdrop-blur-3xl shadow-[0_25px_50px_-15px_rgba(0,0,0,0.1),0_0_100px_rgba(99,102,241,0.05)] dark:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.25),0_0_100px_rgba(99,102,241,0.1)] border border-black/10 dark:border-white/5 transition-all duration-700 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.15),0_0_120px_rgba(139,92,246,0.08)] dark:hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3),0_0_120px_rgba(139,92,246,0.15)] group">
        {/* Floating Orbs Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-72 h-72 -top-36 -left-36 bg-gradient-to-br from-indigo-400/15 dark:from-indigo-500/20 via-purple-400/8 dark:via-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse opacity-40 dark:opacity-60" />
          <div
            className="absolute w-96 h-96 -bottom-48 -right-48 bg-gradient-to-tl from-cyan-400/10 dark:from-cyan-500/15 via-blue-400/8 dark:via-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse opacity-30 dark:opacity-40"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute w-64 h-64 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-violet-400/8 dark:from-violet-500/10 to-fuchsia-400/8 dark:to-fuchsia-500/10 rounded-full blur-2xl animate-ping opacity-20 dark:opacity-30"
            style={{ animationDelay: "4s" }}
          />
        </div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none">
          <div
            className="w-full h-full bg-[linear-gradient(rgba(99,102,241,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.6)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(99,102,241,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.8)_1px,transparent_1px)] bg-[size:32px_32px]"
            style={{
              animation: "grid-move 20s linear infinite",
            }}
          />
        </div>

        {/* Shimmer Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-black/3 dark:via-white/5 to-transparent translate-x-[-100%] skew-x-12"
            style={{
              animation: "shimmer 3s infinite",
            }}
          />
        </div>

        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-400/15 dark:from-indigo-500/20 via-purple-400/8 dark:via-purple-500/10 via-pink-400/3 dark:via-pink-500/5 to-transparent animate-pulse opacity-60 dark:opacity-80" />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-400/10 dark:from-cyan-500/15 via-blue-400/6 dark:via-blue-500/8 to-transparent animate-pulse opacity-40 dark:opacity-60"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Enhanced Text Section */}
          <div className="text-center lg:text-left group-hover:transform group-hover:scale-[1.02] transition-transform duration-500">
            <h2
              className="text-5xl md:text-8xl font-extralight text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-700 to-gray-600 dark:from-white dark:via-gray-100 dark:to-gray-200 mb-4 tracking-tight leading-none drop-shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              style={{
                animation: "glow 4s ease-in-out infinite alternate",
              }}
            >
              Let&apos;s work together
            </h2>

            {/* <p className="text-base md:text-lg text-gray-600 dark:text-neutral-300/80 max-w-md mx-auto lg:mx-0 leading-relaxed backdrop-blur-sm">
              Interested in collaborating on your next project to achieve your
              goals?
              <br className="hidden sm:block" />
              Let's build something amazing — send me a message!
            </p> */}
          </div>

          {/* Enhanced Button Section */}
          <div className="relative">
            {/* Button Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-400/15 dark:from-indigo-500/20 via-purple-400/15 dark:via-purple-500/20 to-cyan-400/15 dark:to-cyan-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" />

            <ContactModalNew>
              <ContactModalNew.Open opens="contact">
                <CoolMode>
                  <CustomButton className="relative rounded-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 dark:from-white dark:via-gray-100 dark:to-white text-white dark:text-gray-900 border-0 py-8 px-12 font-medium text-lg tracking-wide shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.4)] transform hover:-translate-y-1 active:translate-y-0 transition-all duration-300 overflow-hidden group/button before:absolute before:inset-0 before:bg-gradient-to-r before:from-indigo-400/8 dark:before:from-indigo-500/10 before:via-purple-400/8 dark:before:via-purple-500/10 before:to-cyan-400/8 dark:before:to-cyan-500/10 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-out">
                    <span className="relative z-10 flex items-center gap-3">
                      Let&apos;s talk
                      <svg
                        className="w-5 h-5 transform group-hover/button:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </CustomButton>
                </CoolMode>
              </ContactModalNew.Open>

              <ContactModalNew.ContactModalWindow name="contact">
                <ContactForm />
              </ContactModalNew.ContactModalWindow>
            </ContactModalNew>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(12deg);
          }
          100% {
            transform: translateX(200%) skewX(12deg);
          }
        }

        @keyframes grid-move {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 32px 32px;
          }
        }

        @keyframes glow {
          from {
            filter: brightness(1) drop-shadow(0 0 10px rgba(0, 0, 0, 0.1));
          }
          to {
            filter: brightness(1.05) drop-shadow(0 0 20px rgba(0, 0, 0, 0.15));
          }
        }

        @media (prefers-color-scheme: dark) {
          @keyframes glow {
            from {
              filter: brightness(1)
                drop-shadow(0 0 10px rgba(255, 255, 255, 0.1));
            }
            to {
              filter: brightness(1.05)
                drop-shadow(0 0 20px rgba(255, 255, 255, 0.2));
            }
          }
        }
      `}</style>
    </Wrapper>
  );
};

export default Contact;
