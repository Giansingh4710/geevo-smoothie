import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import VisitUsPage from "./pages/VisitUsPage.tsx";
// import ContactPage from "./pages/ContactPage.tsx";
import { PAGES } from "./assets/constants.tsx";
import MenuPage from "./pages/MenuPage.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <div className="w-screen h-full bg-pink-50 font-lora">
        <Routes>
          <Route path={PAGES.home.path} element={<HomePage />} />
          <Route path={PAGES.menu.path} element={<MenuPage />} />
          <Route path={PAGES.about.path} element={<AboutPage />} />
          <Route path={PAGES.visitus.path} element={<VisitUsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
