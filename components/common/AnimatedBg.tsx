"use client";
import React from "react";

const AnimatedBg = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-pink-500/15 to-orange-500/15 blur-2xl animate-bounce"
        style={{ animationDuration: "3s" }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-green-500/15 to-cyan-500/15 blur-2xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
    </div>
  );
};

export default AnimatedBg;
