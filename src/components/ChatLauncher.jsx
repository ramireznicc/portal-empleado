// src/components/ChatLauncher.jsx
import React from "react";

export default function ChatLauncher({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-[#EF6948] text-white p-4 rounded-full shadow-lg hover:bg-[#d85c3c] transition z-50"
      aria-label="Abrir chat"
    >
      💬
    </button>
  );
}
