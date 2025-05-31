"use client";
import { Heart, Facebook, Github, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full py-8 px-4  text-gray-700 dark:text-gray-300 border-t border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5 dark:from-blue-400/10 dark:via-purple-400/10 dark:to-pink-400/10 animate-pulse"></div>

      {/* Floating orbs for visual interest */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-bounce"></div>
      <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl animate-pulse"></div>

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Main content */}
        <div className="text-center space-y-2">
          <div className="text-sm flex items-center justify-center gap-1 font-medium">
            &copy; {currentYear} — Crafted with
            <div className="relative">
              <Heart
                className="text-red-500 w-4 h-4 mx-1 animate-pulse"
                fill="currentColor"
              />
              <div className="absolute inset-0 text-red-500 w-4 h-4 mx-1 animate-ping opacity-20">
                <Heart fill="currentColor" />
              </div>
            </div>
            and passion by
          </div>
          <div className="text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Md Soworv Khadem
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1">
            <MapPin className="w-3 h-3" />
            Full Stack Developer • Dhaka, Bangladesh
          </div>
        </div>

        {/* Social links with enhanced animations */}
        <div className="flex gap-3">
          <Link
            href="https://www.linkedin.com/in/md-sowrov-316968177/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-full p-3 transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/25"
          >
            <Linkedin className="w-5 h-5 transition-transform group-hover:rotate-12" />
            <div className="absolute inset-0 rounded-full bg-blue-600/20 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
          </Link>

          <Link
            href="https://github.com/mdsowrov2020"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-full p-3 transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-gray-500/25"
          >
            <Github className="w-5 h-5 transition-transform group-hover:rotate-12" />
            <div className="absolute inset-0 rounded-full bg-gray-600/20 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
          </Link>

          <Link
            href="https://facebook.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-full p-3 transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-blue-500 dark:hover:bg-blue-400 hover:text-white hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/25"
          >
            <Facebook className="w-5 h-5 transition-transform group-hover:rotate-12" />
            <div className="absolute inset-0 rounded-full bg-blue-500/20 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
          </Link>

          <Link
            href="mailto:your-mdsowrovkhadem@gmail.com"
            className="group relative rounded-full p-3 transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-purple-500/25"
          >
            <Mail className="w-5 h-5 transition-transform group-hover:rotate-12" />
            <div className="absolute inset-0 rounded-full bg-purple-500/20 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
          </Link>
        </div>

        {/* Divider with gradient */}
        <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>

        {/* Additional info */}
        <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
          Building digital experiences • One line of code at a time
        </div>
      </div>
    </footer>
  );
};

export default Footer;
