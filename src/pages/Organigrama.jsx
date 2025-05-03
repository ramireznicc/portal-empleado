import React, { useState } from "react";
import Button from "../components/Button";
import PageContainer from "../components/PageContainer";
import Toast from "../components/Toast";
import {
  Building2,
  Users,
  Rainbow,
  LaptopMinimal,
  TabletSmartphone,
  BadgeEuro,
  Headset,
  Carrot,
  Handshake,
  Factory,
} from "lucide-react";

const departamentos = [
  { nombre: "Dirección", icono: <Building2 size={20} /> },
  { nombre: "Recursos Humanos", icono: <Users size={20} /> },
  { nombre: "Marketing", icono: <Rainbow size={20} /> },
  { nombre: "IT", icono: <LaptopMinimal size={20} /> },
  { nombre: "Producto Digital", icono: <TabletSmartphone size={20} /> },
  { nombre: "Finanzas", icono: <BadgeEuro size={20} /> },
  { nombre: "Atención al Cliente", icono: <Headset size={20} /> },
  { nombre: "Nutrición", icono: <Carrot size={20} /> },
  { nombre: "Ventas", icono: <Handshake size={20} /> },
  { nombre: "Fábrica - Picking", icono: <Factory size={20} /> },
  { nombre: "Fábrica - Italia", icono: <Factory size={20} /> },
];

export default function Organigrama() {
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleClick = (nombre) => {
    setToastMessage(`Has seleccionado el departamento de ${nombre}`);
    setShowToast(true);
    setFadeOut(false);
    setTimeout(() => setFadeOut(true), 2500);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <PageContainer>
      <h1 className="text-3xl font-extrabold mb-2 text-center">Organigrama</h1>
      <p className="text-sm text-neutral-semidark mb-6 text-center">
        Así se conforma el equipo de Dogfy Diet en la actualidad 😊
      </p>
      <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
        {departamentos.map((dep) => (
          <Button
            key={dep.nombre}
            icon={dep.icono}
            variant="neutral"
            className="w-full"
            onClick={() => handleClick(dep.nombre)}
          >
            {dep.nombre}
          </Button>
        ))}
      </div>

      <Toast message={toastMessage} visible={showToast} fadeOut={fadeOut} />
    </PageContainer>
  );
}
