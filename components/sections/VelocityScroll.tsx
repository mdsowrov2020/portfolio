import React from "react";
import Wrapper from "../common/Wrapper";
import { VelocityScroll } from "../magicui/scroll-based-velocity";

const VelocityScrollSection = () => {
  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-0">
      <Wrapper>
        <div className="relative flex w-[300px] lg:w-full flex-col items-center justify-center overflow-hidden">
          <VelocityScroll>
            <span className="text-lg sm:text-2xl md:text-3xl font-semibold whitespace-nowrap">
              Personal Portfolio 🎉
            </span>
          </VelocityScroll>

          {/* Gradient overlays, reduce width on small screens */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 sm:w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 sm:w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </Wrapper>
    </div>
  );
};

export default VelocityScrollSection;
