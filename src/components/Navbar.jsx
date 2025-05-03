import React, { useState } from "react";
import { Bell, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar({ userName }) {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between relative">
      <div className="flex items-center space-x-4">
        <Link
          to="/home"
          className="transition-transform duration-200 hover:scale-105"
        >
          <img
            src="/assets/logos/dogfy-orange.png"
            alt="Dogfy Diet Logo"
            className="h-10"
          />
        </Link>
        <div className="leading-tight">
          <p className="text-sm text-gray-500">Bienvenido/a</p>
          <p className="text-md font-semibold text-gray-800">{userName}</p>
        </div>
      </div>

      <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700 relative">
        <Link to="/home" className="hover:text-[#EF6948] transition">
          🏠 Home
        </Link>

        <div className="relative group">
          <button className="hover:text-[#EF6948] transition flex items-center gap-1">
            📑 Información{" "}
            <span className="transition-transform duration-200 group-hover:rotate-180">
              <ChevronDown className="w-4 h-4" />
            </span>
          </button>
          <div className="absolute top-full mt-2 bg-white border border-gray-200 rounded-md shadow-md py-2 w-48 z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
            <Link
              to="/handbook"
              className="block px-4 py-2 hover:bg-[#ffe7df] text-gray-800 rounded"
            >
              📘 Handbook
            </Link>
            <Link
              to="/organigrama"
              className="block px-4 py-2 hover:bg-[#ffe7df] text-gray-800 rounded"
            >
              👥 Organigrama
            </Link>
            <Link
              to="/directorio"
              className="block px-4 py-2 hover:bg-[#ffe7df] text-gray-800 rounded"
            >
              📒 Directorio
            </Link>
          </div>
        </div>
        <div className="relative group">
          <button className="hover:text-[#EF6948] transition flex items-center gap-1">
            🧰 Recursos{" "}
            <span className="transition-transform duration-200 group-hover:rotate-180">
              <ChevronDown className="w-4 h-4" />
            </span>
          </button>
          <div className="absolute top-full mt-2 bg-white border border-gray-200 rounded-md shadow-md py-2 w-48 z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
            <Link
              to="/vacantes"
              className="block px-4 py-2 hover:bg-[#ffe7df] text-gray-800 rounded"
            >
              💼 Vacantes
            </Link>
            <Link
              to="/apps"
              className="block px-4 py-2 hover:bg-[#ffe7df] text-gray-800 rounded"
            >
              📱 Apps
            </Link>
            <Link
              to="/formaciones"
              className="block px-4 py-2 hover:bg-[#ffe7df] text-gray-800 rounded"
            >
              📚 Formaciones
            </Link>
          </div>
        </div>
        <div className="relative group">
          <button className="hover:text-[#EF6948] transition flex items-center gap-1">
            🗂️ Gestión
            <span className="transition-transform duration-200 group-hover:rotate-180">
              <ChevronDown className="w-4 h-4" />
            </span>
          </button>
          <div className="absolute top-full mt-2 bg-white border border-gray-200 rounded-md shadow-md py-2 w-48 z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
            <Link
              to="/gastos-solicitudes"
              className="block px-4 py-2 hover:bg-[#ffe7df] text-gray-800 rounded"
            >
              ✅ Gastos - Solicitudes
            </Link>
            <Link
              to="/proveedores"
              className="block px-4 py-2 hover:bg-[#ffe7df] text-gray-800 rounded"
            >
              🪪 Proveedores
            </Link>
          </div>
        </div>
        <div className="relative group">
          <button className="hover:text-[#EF6948] transition flex items-center gap-1">
            🎙️ Comunicaciones
            <span className="transition-transform duration-200 group-hover:rotate-180">
              <ChevronDown className="w-4 h-4" />
            </span>
          </button>
          <div className="absolute top-full mt-2 bg-white border border-gray-200 rounded-md shadow-md py-2 w-48 z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
            <Link
              to="/newsletter"
              className="block px-4 py-2 hover:bg-[#ffe7df] text-gray-800 rounded"
            >
              📰 Newsletter
            </Link>
            <Link
              to="/podcast"
              className="block px-4 py-2 hover:bg-[#ffe7df] text-gray-800 rounded"
            >
              🎥 Podcast
            </Link>
          </div>
        </div>
        <a
          href="https://forms.gle/JwEQvuaPmieVgNrx5"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#EF6948] transition"
        >
          📬 Sugerencias
        </a>

        <button className="ml-2 text-gray-600 hover:text-[#EF6948] transition">
          <Bell className="w-5 h-5" />
        </button>
      </nav>
    </header>
  );
}
