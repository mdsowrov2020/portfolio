import React from "react";
import { ContactModalNew } from "./ContactModalNew";
import ContactForm from "./ContactForm";

const FloatingButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <ContactModalNew>
        <ContactModalNew.Open opens="contact-float">
          <button className="p-4 cursor-pointer rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-bounce">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </button>
        </ContactModalNew.Open>

        <ContactModalNew.ContactModalWindow name="contact-float">
          <ContactForm />
        </ContactModalNew.ContactModalWindow>
      </ContactModalNew>
    </div>
  );
};

export default FloatingButton;
