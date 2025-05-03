import React from "react";
import Button from "./Button";

export default function WelcomeSection() {
  return (
    <section className="w-full text-center bg-brand-primary-light">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
        ¡Te damos la bienvenida al Portal del Empleado/a!
      </h1>
      <div className="flex justify-center mb-6">
        <img
          src="/assets/illustrations/dodi.png"
          alt="Dodi"
          className="w-64 h-64 rounded-full object-contain"
        />
      </div>
      <p className="text-lg text-gray-600 mb-6">
        Tu espacio con toda la información que necesitás para tu día a día.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button
          variant="primary"
          icon={
            <img
              src="/assets/icons/dogfy-favicon-white.png"
              alt="Web Dogfy"
              className="w-5 h-5"
            />
          }
          iconPosition="left"
          onClick={() => window.open("https://www.dogfydiet.com", "_blank")}
        >
          Ir a la web
        </Button>
        <Button
          variant="primary"
          icon={
            <img
              src="/assets/icons/woffu-icon.png"
              alt="Woffu"
              className="w-5 h-5"
            />
          }
          iconPosition="left"
          onClick={() => window.open("https://dogfy.woffu.com", "_blank")}
        >
          Ir a Woffu
        </Button>
      </div>
    </section>
  );
}
