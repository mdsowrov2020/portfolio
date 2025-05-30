"use client";

import { ThemeProvider } from "next-themes";
import LoadingScreen from "./LoadingScreen";
import { HeroHighlight } from "../ui/hero-highlight";
import { SmoothCursor } from "../ui/smooth-cursor";
import { Nav } from "./Nav";

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
        {/* <HeroHighlight> */}
        {/* <SmoothCursor /> */}
        <Nav />
        {children}
        {/* </HeroHighlight> */}
      </ThemeProvider>
    </>
  );
}
