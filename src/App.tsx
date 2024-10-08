import React, { useEffect, useRef } from "react";
import NavBar from "./components/NavBar.tsx";
import HomeSection from "./components/HomeSection.tsx";
import SmoothiesSection from "./components/SmoothiesSection.tsx";
import AboutSection from "./components/AboutSection.tsx";
import LocationSection from "./components/LocationSection.tsx";
import { SMOOTHIES, Section } from "./assets/constants.tsx";
import ContactSection from "./components/ContactSection.tsx";

const App: React.FC = () => {
  const [currentSmoothie, setCurrentSmoothie] = React.useState(SMOOTHIES[0]);

  useEffect(() => {
  }, []);

  return (
    <div className="w-screen h-full bg-yellow-400">
      <NavBar />
      <HomeSection
        currentSmoothie={currentSmoothie}
      />
      <SmoothiesSection
        currentSmoothie={currentSmoothie}
        setCurrentSmoothie={setCurrentSmoothie}
      />
      <AboutSection />
      <LocationSection />
      <ContactSection />
    </div>
  );
};

export default App;
