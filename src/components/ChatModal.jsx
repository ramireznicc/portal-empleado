import React, { useState, useEffect, useRef } from "react";

export default function ChatModal({ fadeOut }) {
  const [messages, setMessages] = useState([
    {
      from: "dodi",
      text: "Hola! ¡Soy Dodi! Preguntame lo que necesites saber :)",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const userInitial = "N"; // Luego se reemplazará por la inicial real

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages((prev) => [...prev, { from: "user", text: input }]);
    setInput("");

    // Simulación de respuesta de Dodi
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "dodi",
          text: "Gracias por tu consulta. Te responderé pronto.",
        },
      ]);
    }, 1000);
  };

  return (
    <div
      className={`fixed bottom-28 right-6 w-80 bg-white rounded-2xl shadow-lg border border-gray-200 z-50 flex flex-col overflow-hidden transition-opacity duration-300 ${
        fadeOut ? "animate-fade-out" : "animate-fade-in"
      }`}
    >
      <div className="bg-[#EF6948] text-white px-4 py-3 font-semibold">
        ¡Pregúntale a Dodi lo que necesites!
      </div>

      <div className="p-4 text-sm text-gray-600 h-60 overflow-y-auto space-y-3">
        {messages.map((msg, index) => (
          <div key={index} className="flex items-start gap-2">
            {msg.from === "dodi" ? (
              <>
                <img
                  src="/assets/icons/dodi-chat.png"
                  alt="Dodi"
                  className="w-6 h-6 rounded-full mt-1"
                />
                <div className="bg-neutral-light text-neutral-dark px-3 py-2 rounded-xl text-sm">
                  {msg.text}
                </div>
              </>
            ) : (
              <div className="ml-auto flex items-center gap-2">
                <div className="bg-brand-primary-light text-neutral-dark px-3 py-2 rounded-xl text-sm">
                  {msg.text}
                </div>
                <div className="bg-brand-secondary-medium text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  {userInitial}
                </div>
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t px-4 py-3">
        <input
          type="text"
          placeholder="Escribe aquí tu consulta ..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#EF6948]"
        />
      </div>
    </div>
  );
}
