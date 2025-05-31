import React, { forwardRef, MouseEventHandler, ReactNode, Ref } from "react";
import { Button } from "../ui/button";

type CustomButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const CustomButton = forwardRef(
  (
    { children, className, onClick }: CustomButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    return (
      <Button
        ref={ref}
        variant="secondary"
        className={`group cursor-pointer relative px-12 py-6 rounded-full text-lg font-semibold bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-xl hover:scale-105 transition-transform duration-300 ${className}`}
        onClick={onClick}
      >
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 bg-white opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-300" />
      </Button>
    );
  }
);

CustomButton.displayName = "CustomButton";
export default CustomButton;
