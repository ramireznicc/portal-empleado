import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Aquí luego se integrará Firebase Auth
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 font-manrope text-neutral-dark">
      <div className="bg-white rounded-3xl shadow-lg p-8 max-w-md w-full text-center">
        <img
          src="/assets/logos/dogfy-orange.png"
          alt="Dogfy Diet"
          className="w-32 mx-auto mb-6"
        />
        <h1 className="text-2xl font-bold text-gray-800 mb-1 leading-snug">
          Bienvenido/a al
        </h1>
        <h2 className="text-2xl font-bold text-gray-700 mb-6 leading-snug">
          Portal del Empleado/a
        </h2>
        <p className="text-gray-500 mb-6">
          Inicia sesión con tu cuenta de Dogfy Diet.
        </p>
        <Button
          variant="google"
          icon={
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google icon"
              className="w-5 h-5"
            />
          }
          iconPosition="left"
          onClick={handleLogin}
        >
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}
