import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Share2 } from "lucide-react";
import PageContainer from "../components/PageContainer";
import Toast from "../components/Toast";

const mockNews = [
  {
    id: 1,
    title: "¡Nuevo espacio Dogfy Chill inaugurado!",
    description:
      "Este trimestre estrenamos un espacio para desconectar, leer y compartir momentos con el equipo.",
    image: "/assets/news/07-01.jpg",
    likes: 12,
  },
  {
    id: 2,
    title: "Nuevas incorporaciones al equipo de atención",
    description:
      "Te presentamos a quienes se sumaron este trimestre y ya están aportando buena energía y compromiso.",
    image: "/assets/news/07-02.jpg",
    likes: 28,
  },
  {
    id: 3,
    title: "Resultados de la encuesta de clima laboral",
    description:
      "Gracias a todos por participar. Compartimos los principales hallazgos y próximos pasos.",
    image: "/assets/news/07-03.jpg",
    likes: 17,
  },
];

export default function NewsletterPage() {
  const navigate = useNavigate();
  const [likedNews, setLikedNews] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const toggleLike = (id) => {
    setLikedNews((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleShare = (id) => {
    const url = `${window.location.origin}/newsletter/${id}`;
    navigator.clipboard.writeText(url).then(() => {
      setShowToast(true);
      setFadeOut(false);
      setTimeout(() => setFadeOut(true), 2500);
      setTimeout(() => setShowToast(false), 3000);
    });
  };

  return (
    <PageContainer>
      <h1 className="text-3xl font-extrabold text-center mb-2">
        📰 Newsletter
      </h1>
      <p className="text-sm text-neutral-semidark mb-6 text-center">
        Julio 2025
      </p>
      <div className="space-y-6 max-w-3xl mx-auto">
        {mockNews.map((news) => (
          <div
            key={news.id}
            className="bg-neutral-ultralight rounded-2xl shadow-md flex flex-col sm:flex-row overflow-hidden"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full sm:w-1/3 h-48 object-cover"
            />
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2">{news.title}</h2>
                <p className="text-sm text-neutral-semidark mb-4">
                  {news.description}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => toggleLike(news.id)}
                    className={`flex items-center gap-1 text-sm transition-colors ${
                      likedNews.includes(news.id)
                        ? "text-red-500"
                        : "text-brand-primary-dark hover:text-brand-primary-darkest"
                    }`}
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        likedNews.includes(news.id) ? "fill-red-500" : ""
                      }`}
                    />
                    {news.likes + (likedNews.includes(news.id) ? 1 : 0)}
                  </button>
                  <button
                    onClick={() => handleShare(news.id)}
                    className="flex items-center gap-1 text-sm text-brand-primary-dark hover:text-brand-primary-darkest"
                  >
                    <Share2 className="w-4 h-4" /> Compartir
                  </button>
                </div>
                <button
                  onClick={() => navigate(`/newsletter/${news.id}`)}
                  className="text-sm text-brand-primary-dark hover:underline"
                >
                  Leer artículo →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Toast
        message="Enlace del artículo copiado al portapapeles ☺️"
        visible={showToast}
        fadeOut={fadeOut}
      />
    </PageContainer>
  );
}
