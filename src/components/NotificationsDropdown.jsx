import React, { useState } from "react";
import { Bell } from "lucide-react";

const initialNotifications = [
  { id: 1, message: "Nueva newsletter publicada", read: false, date: "Hoy" },
  {
    id: 2,
    message: "Se ha actualizado el organigrama",
    read: false,
    date: "Ayer",
  },
];

export default function NotificationsDropdown() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [showDropdown, setShowDropdown] = useState(false);
  const [removingId, setRemovingId] = useState(null);

  const handleToggle = () => setShowDropdown(!showDropdown);

  const handleRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
    setRemovingId(id);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
      setRemovingId(null);
    }, 300);
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="relative">
      <button
        onClick={handleToggle}
        className="relative text-gray-600 hover:text-[#EF6948] transition"
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-brand-primary-dark text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            {unreadCount}
          </span>
        )}
      </button>

      {showDropdown && (
        <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50">
          {notifications.length === 0 ? (
            <p className="text-sm text-gray-500 px-4 py-2">
              No hay notificaciones
            </p>
          ) : (
            notifications.map((notif) => (
              <div
                key={notif.id}
                onClick={() => handleRead(notif.id)}
                className={`px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-300 cursor-pointer ${
                  removingId === notif.id
                    ? "opacity-0 translate-x-4"
                    : "opacity-100"
                }`}
              >
                <div className="flex items-center gap-2">
                  {!notif.read && (
                    <span className="w-2 h-2 rounded-full bg-brand-primary-dark"></span>
                  )}
                  <span>{notif.message}</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">{notif.date}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
