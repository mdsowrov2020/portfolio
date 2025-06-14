"use client";
import React, { useState } from "react";
import { Mail, User, MessageSquare, Send, Sparkles } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", formData);

    // Reset form and close modal
    setFormData({ fullName: "", email: "", message: "" });
    setIsSubmitting(false);
    // onClose();

    // You can add success notification here
    alert("Message sent successfully!");
  };

  return (
    <>
      {/* Form with enhanced styling */}
      <div className=" pb-8 space-y-6">
        {/* Full Name Field */}
        <div className="group">
          <label
            htmlFor="fullName"
            className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3 group-focus-within:text-purple-600 dark:group-focus-within:text-purple-400 transition-colors"
          >
            Full Name
          </label>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 blur-sm" />
            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-500 dark:group-focus-within:text-purple-400 transition-colors z-10" />
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="relative w-full pl-12 pr-4 py-4 border-0 rounded-2xl bg-white/50 dark:bg-black/30 backdrop-blur-sm focus:bg-white/70 dark:focus:bg-black/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-purple-500/50 focus:outline-none shadow-lg"
              placeholder="Your amazing name"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="group">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3 group-focus-within:text-purple-600 dark:group-focus-within:text-purple-400 transition-colors"
          >
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 blur-sm" />
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 dark:group-focus-within:text-blue-400 transition-colors z-10" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="relative w-full pl-12 pr-4 py-4 border-0 rounded-2xl bg-white/50 dark:bg-black/30 backdrop-blur-sm focus:bg-white/70 dark:focus:bg-black/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-blue-500/50 focus:outline-none shadow-lg"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="group">
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3 group-focus-within:text-pink-600 dark:group-focus-within:text-pink-400 transition-colors"
          >
            Your Message
          </label>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 blur-sm" />
            <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-pink-500 dark:group-focus-within:text-pink-400 transition-colors z-10" />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
              className="relative w-full pl-12 pr-4 py-4 border-0 rounded-2xl bg-white/50 dark:bg-black/30 backdrop-blur-sm focus:bg-white/70 dark:focus:bg-black/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none transition-all duration-300 focus:ring-2 focus:ring-pink-500/50 focus:outline-none shadow-lg"
              placeholder="Tell me about your dream project, your wildest ideas, or just say hello! ✨"
            />
          </div>
        </div>

        {/* Enhanced Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="group relative w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
        >
          {/* Button background animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-pulse" />

          {/* Button content */}
          <div className="relative flex items-center gap-3">
            {isSubmitting ? (
              <>
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span className="text-lg">Sending Magic...</span>
              </>
            ) : (
              <>
                <Send className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-lg">Send Message</span>
                <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
              </>
            )}
          </div>
        </button>

        {/* Footer with modern styling */}
        <div className="text-center pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/30 dark:bg-black/20 backdrop-blur-sm rounded-full border border-white/20">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
              Usually respond within 2-4 hours
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
