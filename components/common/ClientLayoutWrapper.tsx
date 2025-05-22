"use client";

import { ThemeProvider } from "next-themes";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { Nav } from "@/components/common/Nav";
import LoadingScreen from "@/components/common/LoadingScreen";

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
        <HeroHighlight>
          <SmoothCursor />
          <Nav />
          {children}
        </HeroHighlight>
      </ThemeProvider>
    </>
  );
}
