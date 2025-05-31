"use client";

import { ThemeProvider } from "next-themes";
import LoadingScreen from "./LoadingScreen";

import { Nav } from "./Nav";
import AnimatedBg from "./AnimatedBg";
import FloatingButton from "./FloatingButton";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LoadingScreen />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Nav />
        <AnimatedBg />
        <FloatingButton />
        {children}
      </ThemeProvider>
    </>
  );
}
