import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import CaseStudy from "./app/CaseStudy.tsx";
import LandingPage from "./app/LandingPage.tsx";
import PrivacyPolicy from "./app/PrivacyPolicy.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/case-study" element={<CaseStudy />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
    </Routes>
  </BrowserRouter>
);
