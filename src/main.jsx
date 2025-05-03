import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateLayout from "./layouts/PrivateLayout.jsx";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import NewsletterPage from "./pages/NewsletterPage.jsx";
import Organigrama from "./pages/Organigrama.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/home"
          element={
            <PrivateLayout>
              <Home />
            </PrivateLayout>
          }
        />
        <Route
          path="/newsletter"
          element={
            <PrivateLayout>
              <NewsletterPage />
            </PrivateLayout>
          }
        />
        <Route
          path="/organigrama"
          element={
            <PrivateLayout>
              <Organigrama />
            </PrivateLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
