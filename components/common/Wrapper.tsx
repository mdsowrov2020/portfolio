import React, { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

const Wrapper = ({ children, className = "" }: WrapperProps) => {
  return (
    <div
      className={`
        w-full
        lg:max-w-[1170px]
        mx-auto px-10
        lg:px-0
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Wrapper;
