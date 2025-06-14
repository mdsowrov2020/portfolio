"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Sparkles } from "lucide-react";
import ContactForm from "./ContactForm";
type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const closeModal = () => {
    onClose();
  };

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-in fade-in-0 duration-300"
      style={{ isolation: "auto" }}
    >
      {/* Enhanced Backdrop with animated gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/20 to-blue-900/20 backdrop-blur-xl"
        onClick={closeModal}
      />

      {/* Floating orbs for ambient effect */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 blur-3xl animate-pulse delay-1000" />

      {/* Modal Content with glassmorphism */}
      <div className="relative w-full max-w-lg bg-white/10 dark:bg-black/20 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 dark:border-white/10 animate-in zoom-in-95 slide-in-from-bottom-10 duration-500 overflow-hidden">
        {/* Gradient border effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 p-[1px]">
          <div className="w-full h-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Header with floating effect */}
          <div className="relative p-8 pb-6">
            {/* Close button with modern styling */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 p-2 hover:bg-white/20 dark:hover:bg-black/20 rounded-full transition-all duration-200 group backdrop-blur-sm border border-white/10"
            >
              <X className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
            </button>

            {/* Header content */}
            <div className="pr-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 dark:from-white dark:via-purple-200 dark:to-white bg-clip-text text-transparent">
                  Let&apos;s Create Magic
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Ready to bring your vision to life? Let&apos;s start the
                conversation.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
