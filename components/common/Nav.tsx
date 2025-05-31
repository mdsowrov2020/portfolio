"use client";

import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Wrapper from "./Wrapper";

export function Nav() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: "About", link: "#about" },
    { name: "Work", link: "#work" },
    { name: "Contact", link: "#contact" },
  ];

  // Smooth scroll handler
  const handleScrollToSection = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
    sectionId: string
  ): void => {
    e.preventDefault();

    // Remove the # from the sectionId
    const targetId = sectionId.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <div className="sticky top-0 z-[100] w-full ">
      <Wrapper>
        <Navbar>
          {/* Desktop Navigation */}
          <NavBody
            className="backdrop-blur-md bg-white/30 dark:bg-black/30
                 border-b border-white/10 dark:border-gray-800/50 shadow-sm transition-colors duration-300 py-4"
          >
            <Link href="/" className="text-xl font-bold">
              <NavbarLogo />
            </Link>

            {/* Updated NavItems with smooth scrolling */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item, idx) => (
                <button
                  key={`desktop-nav-${idx}`}
                  onClick={(e) => handleScrollToSection(e, item.link)}
                  className="text-neutral-600 dark:text-neutral-300 hover:text-blue-500 transition-colors duration-200 cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
            </div>

            <button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-200 z-50"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </NavBody>

          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <Link href="/" className="text-xl font-bold">
                <NavbarLogo />
              </Link>
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <button
                  key={`mobile-link-${idx}`}
                  onClick={(e) => handleScrollToSection(e, item.link)}
                  className="block py-2 text-left w-full text-neutral-600 dark:text-neutral-300 hover:text-blue-500 transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => {
                  setTheme(resolvedTheme === "dark" ? "light" : "dark");
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 w-full py-2 text-left hover:text-blue-500 transition-colors"
              >
                {resolvedTheme === "dark" ? (
                  <>
                    <Sun className="w-5 h-5" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-5 h-5" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </Wrapper>
    </div>
  );
}
