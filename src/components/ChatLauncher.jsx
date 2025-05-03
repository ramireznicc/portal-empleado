import React from "react";
import { MessageCircle } from "lucide-react";

export default function ChatLauncher({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="group fixed bottom-6 right-6 bg-[#EF6948] text-white p-4 rounded-full shadow-lg hover:bg-[#d85c3c] transition z-50"
      aria-label="Abrir chat"
    >
      <MessageCircle className="w-6 h-6 transition-transform duration-300 ease-in-out group-hover:scale-110" />
    </button>
  );
}
