import React from "react";
import PageContainer from "../components/PageContainer";

export default function Podcast() {
  return (
    <PageContainer>
      <h1 className="text-3xl font-extrabold text-center mb-6">🎙️ Podcast</h1>
      <p className="text-center text-neutral-semidark mb-10">
        Reviví los episodios grabados en Dogfy Diet
      </p>
      <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto rounded-xl shadow-lg overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/mLCPGMWEG-Y"
          title="Podcast Dogfy Diet"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </PageContainer>
  );
}
