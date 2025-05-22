import React from "react";
import Wrapper from "../common/Wrapper";
import { SparklesText } from "../magicui/sparkles-text";

const Great = () => {
  return (
    <Wrapper className="w-7xl">
      <SparklesText className=" text-center">
        {/* <h2 className="text-9xl font-bold tracking-[10px] text-neutral-400 ">
          THANK YOU
        </h2> */}
        <svg
          width="100%"
          height="300"
          viewBox="0 0 1000 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="gradientStroke"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stop-color="#ff7e5f" />
              <stop offset="100%" stop-color="#feb47b" />
            </linearGradient>
          </defs>

          <text
            x="50%"
            y="50%"
            text-anchor="middle"
            dominant-baseline="middle"
            font-size="150"
            font-family="Arial, sans-serif"
            font-weight="bold"
            fill="none"
            stroke="url(#gradientStroke)"
            stroke-width="1"
          >
            THANK YOU
          </text>
        </svg>
      </SparklesText>
    </Wrapper>
  );
};

export default Great;
