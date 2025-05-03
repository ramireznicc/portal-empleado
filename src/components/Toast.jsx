import React from "react";

export default function Toast({ message, visible, fadeOut }) {
  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 bg-brand-primary-dark text-white px-4 py-2 rounded-xl shadow-lg text-sm z-50 transition-opacity duration-300 ${
        fadeOut ? "animate-fade-out" : "animate-fade-in"
      }`}
    >
      {message}
    </div>
  );
}
