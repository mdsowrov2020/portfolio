"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowRight,
  Code,
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

interface Dot {
  x: number;
  y: number;
  originalX: number;
  originalY: number;
  size: number;
  opacity: number;
}

interface SocialLink {
  Icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
  target: string;
}

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const { theme } = useTheme();

  const getDotColor = (opacity: number) => {
    return theme === "dark"
      ? `rgba(255, 255, 255, ${opacity})`
      : `rgba(0, 0, 0, ${opacity * 0.8})`;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number | undefined;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const dots: Dot[] = [];
    const spacing = 60;
    const cols = Math.ceil(canvas.width / spacing) + 1;
    const rows = Math.ceil(canvas.height / spacing) + 1;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        dots.push({
          x: i * spacing,
          y: j * spacing,
          originalX: i * spacing,
          originalY: j * spacing,
          size: 1,
          opacity: 0.1,
        });
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        const dx = mousePos.x - dot.originalX;
        const dy = mousePos.y - dot.originalY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          dot.x = dot.originalX + dx * force * 0.3;
          dot.y = dot.originalY + dy * force * 0.3;
          dot.size = 1 + force * 3;
          dot.opacity = 0.1 + force * 0.6;
        } else {
          dot.x += (dot.originalX - dot.x) * 0.05;
          dot.y += (dot.originalY - dot.y) * 0.05;
          dot.size += (1 - dot.size) * 0.05;
          dot.opacity += (0.1 - dot.opacity) * 0.05;
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = getDotColor(dot.opacity);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mousePos.x, mousePos.y]);

  const socialLinks: SocialLink[] = [
    {
      Icon: Github,
      href: "https://github.com/mdsowrov2020",
      label: "GitHub",
      target: "_blank",
    },
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/in/md-sowrov-316968177/",
      label: "LinkedIn",
      target: "_blank",
    },
    {
      Icon: Mail,
      href: "mailto:your-mdsowrovkhadem@gmail.com",
      label: "Email",
      target: "",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-transparent">
      {/* Interactive Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Main content */}
      <div
        className={`relative z-20 container mx-auto px-6 flex items-center justify-center min-h-screen transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-gray-800/5 dark:bg-white/5 backdrop-blur-xl border border-gray-800/10 dark:border-white/10 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-800/70 dark:text-white/60 text-sm font-mono">
                Available for projects
              </span>
            </div>
          </div>

          <div className="mb-8 relative">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light leading-none mb-4 tracking-tight">
              <span className="text-gray-800 dark:text-gray-100 animate-fade-in-up">
                Md Sowrov
              </span>
            </h1>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-800/40 dark:via-white/40 to-transparent mx-auto animate-expand"></div>
          </div>

          <div className="mb-12 animate-fade-in-up delay-300">
            <p className="text-xl md:text-2xl text-gray-800/80 dark:text-white/50 font-light tracking-wide">
              Full Stack Developer
            </p>
            <p className="text-lg md:text-xl text-gray-900/60 dark:text-white/30 font-light mt-2">
              Crafting digital experiences with precision
            </p>
          </div>

          <div className="mb-16 animate-fade-in-up delay-500">
            <div className="flex flex-wrap justify-center gap-8 text-gray-800/60 dark:text-white/40 text-sm font-mono">
              <span className="hover:text-white/80 transition-colors duration-300 cursor-default">
                React
              </span>
              <span className="text-gray-800/60 dark:text-white/20">•</span>
              <span className="hover:text-white/80 transition-colors duration-300 cursor-default">
                Next.js
              </span>
              <span className="text-gray-800/60 dark:text-white/20">•</span>
              <span className="hover:text-white/80 transition-colors duration-300 cursor-default">
                Node.js
              </span>
              <span className="text-gray-800/60 dark:text-white/20">•</span>
              <span className="hover:text-white/80 transition-colors duration-300 cursor-default">
                TypeScript
              </span>
            </div>
          </div>

          <div className="mb-20 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-700">
            <Link
              href="#work"
              className="group relative px-8 py-3 bg-gray-800 dark:bg-white text-gray-50 dark:text-black font-medium rounded-sm hover:bg-gray-800/90 dark:hover:bg-white/90 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <span>View Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <Link
              href="/Md_Sowrov_Khadem_Resume.pdf"
              download
              className="group px-8 py-3 border border-gray-800/30 dark:border-white/20 text-gray-800/80 dark:text-white/80 font-medium rounded-sm hover:border-gray-800/40 dark:hover:border-white/40 hover:text-gray-800 dark:hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center gap-2 dark:bg-gray-900/30 backdrop-blur-3xl"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </Link>
          </div>

          {/*  Social links */}
          <div className="flex justify-center gap-8 animate-fade-in-up delay-900">
            {socialLinks.map(({ Icon, href, label, target }, index) => (
              <a
                key={index}
                href={href}
                target={target}
                className="group p-3 text-gray-800/60 dark:text-white/40 hover:text-gray-800/80 dark:hover:text-white/80 transform hover:scale-110 transition-all duration-300"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
            <div className="w-px h-12 bg-gradient-to-b from-gray-900/40 dark:from-white/40 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Floating code elements */}
      <div className="absolute top-20 left-20 opacity-20 dark:opacity-10 animate-float-slow">
        <Code className="w-6 h-6 text-gray-900 dark:text-white transform rotate-12" />
      </div>
      <div className="absolute bottom-32 right-16 opacity-20 dark:opacity-10 animate-float-slow delay-1000">
        <div className="text-gray-900/30 dark:text-white/30 font-mono text-xs transform -rotate-6">
          {"{ }"}
        </div>
      </div>
      <div className="absolute top-1/3 right-20 opacity-20 dark:opacity-10 animate-float-slow delay-500">
        <div className="text-gray-900/30 dark:text-white/30  font-mono text-xs">
          &lt;/&gt;
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 6rem;
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(var(--rotation, 0deg));
          }
          50% {
            transform: translateY(-20px) rotate(var(--rotation, 0deg));
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-expand {
          animation: expand 1s ease-out 0.5s forwards;
          width: 0;
        }

        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
        .delay-900 {
          animation-delay: 0.9s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
