import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { ThemeProvider } from "next-themes";
import { Nav } from "@/components/common/Nav";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md Sowrov | Frontend Engineer",
  description: "Professional portfolio showcasing my frontend development work",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <HeroHighlight>
            {/* <SmoothCursor /> */}
            <Nav />
            {children}
          </HeroHighlight>
        </ThemeProvider>
      </body>
    </html>
  );
}
