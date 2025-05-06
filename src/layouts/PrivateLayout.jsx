import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivateLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-manrope text-neutral-dark bg-gray-50 overflow-x-hidden">
      <Navbar userName="Nicolás" />
      <main className="flex-1 overflow-y-auto pt-16">{children}</main>
      <Footer />
    </div>
  );
}
