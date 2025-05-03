import React, { useState } from "react";
import ChatLauncher from "../components/ChatLauncher";
import ChatModal from "../components/ChatModal";
import WelcomeSection from "../components/WelcomeSection";
import PageContainer from "../components/PageContainer";

export default function Home() {
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      <main>
        <PageContainer full className="bg-brand-primary-light">
          <WelcomeSection />
        </PageContainer>
      </main>

      {/* Chat flotante */}
      <ChatLauncher onClick={() => setShowChat(!showChat)} />

      {/* Modal del chat como componente separado */}
      {showChat && <ChatModal />}
    </>
  );
}
