"use client";

import { ThemeProvider } from "next-themes";
import LoadingScreen from "./LoadingScreen";

import { Nav } from "./Nav";
import AnimatedBg from "./AnimatedBg";
import FloatingButton from "./FloatingButton";
import Footer from "./Footer";
import LenisWrapper from "./LenisWrapper";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <LoadingScreen />
        <Nav />
        <AnimatedBg />
        <FloatingButton />
        <LenisWrapper>{children}</LenisWrapper>
        <Footer />
      </ThemeProvider>
    </>
  );
}
