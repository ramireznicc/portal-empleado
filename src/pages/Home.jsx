import React, { useState } from "react";
import ChatLauncher from "../components/ChatLauncher";
import ChatModal from "../components/ChatModal";
import WelcomeSection from "../components/WelcomeSection";
import PageContainer from "../components/PageContainer";

export default function Home() {
  const [showChat, setShowChat] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleToggleChat = () => {
    if (showChat) {
      setFadeOut(true);
      setTimeout(() => {
        setShowChat(false);
        setFadeOut(false);
      }, 300); // mismo tiempo que la animación fade-out
    } else {
      setShowChat(true);
    }
  };

  return (
    <>
      <main>
        <PageContainer full className="bg-brand-primary-light">
          <WelcomeSection />
        </PageContainer>
      </main>

      <ChatLauncher onClick={handleToggleChat} />
      {showChat && <ChatModal fadeOut={fadeOut} />}
    </>
  );
}
