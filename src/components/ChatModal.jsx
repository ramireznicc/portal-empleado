import React from "react";

export default function ChatModal() {
  return (
    <div className="fixed bottom-28 right-6 w-80 bg-white rounded-2xl shadow-lg border border-gray-200 z-50 flex flex-col overflow-hidden">
      <div className="bg-[#EF6948] text-white px-4 py-3 font-semibold">
        ¡Pregúntale a Dodi lo que necesitas saber!
      </div>
      <div className="p-4 text-sm text-gray-600 h-40 overflow-y-auto">
        {/* Aquí irán los mensajes del chat más adelante */}
        <p></p>
      </div>
      <div className="border-t px-4 py-3">
        <input
          type="text"
          placeholder="Escribe aquí tu consulta ..."
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#EF6948]"
        />
      </div>
    </div>
  );
}
