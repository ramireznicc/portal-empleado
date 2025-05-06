import React from "react";
import {
  SiFacebook,
  SiInstagram,
  SiYoutube,
  SiTiktok,
  SiX,
  SiLinkedin,
} from "react-icons/si";

const redes = [
  {
    nombre: "Facebook",
    icono: <SiFacebook size={18} />,
    link: "https://www.facebook.com/dogfydiet/",
  },
  {
    nombre: "Instagram",
    icono: <SiInstagram size={18} />,
    link: "https://www.instagram.com/dogfydiet/",
  },
  {
    nombre: "YouTube",
    icono: <SiYoutube size={18} />,
    link: "https://www.youtube.com/@dogfydiet",
  },
  {
    nombre: "TikTok",
    icono: <SiTiktok size={18} />,
    link: "http://tiktok.com/@dogfy.diet",
  },
  {
    nombre: "X",
    icono: <SiX size={18} />,
    link: "https://x.com/dogfy_diet",
  },
  {
    nombre: "LinkedIn",
    icono: <SiLinkedin size={18} />,
    link: "https://es.linkedin.com/company/dogfydiet",
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-light py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-semidark">
        <p className="mb-4 md:mb-0 text-center md:text-left">
          © {new Date().getFullYear()} Dogfy Diet — Todos los derechos
          reservados.
        </p>
        <div className="flex gap-4">
          {redes.map((red) => (
            <a
              key={red.nombre}
              href={red.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-primary-dark transition"
              aria-label={red.nombre}
            >
              {red.icono}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
