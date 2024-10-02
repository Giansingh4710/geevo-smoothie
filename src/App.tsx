import React, { useEffect, useRef } from "react";
import Navbar from "./components/NavBar";
import HomeSection from "./components/HomeSection.tsx";
import SmoothiesSection from "./components/SmoothiesSection.tsx";
import AboutSection from "./components/AboutSection.tsx";
import LocationSection from "./components/LocationSection.tsx";
import { SMOOTHIES, Section } from "./assets/constants.tsx";
import ContactSection from "./components/ContactSection.tsx";

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = React.useState(Section.Home);
  const [currentSmoothie, setCurrentSmoothie] = React.useState(SMOOTHIES[0]);

  const observerRef = useRef<IntersectionObserver | null>(null);
  function updateCurrentSection() {
    const sections = Object.values(Section)
      .map((section) => document.getElementById(section))
      .filter((section) => section !== null) as HTMLElement[];

    // Intersection Observer callback
    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id as Section);
        }
      });
    };

    observerRef.current = new IntersectionObserver(callback, {
      root: null, // Use the viewport as the container
      threshold: 0.5, // Trigger when at least 50% of the section is visible
    });

    sections.forEach((section) => {
      observerRef.current?.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observerRef.current?.unobserve(section);
      });
    };
  }
  useEffect(() => {
    updateCurrentSection();
  }, []);

  useEffect(() => {
    const sectionToGoTo = document.getElementById(currentSection);
    if (sectionToGoTo) {
      sectionToGoTo.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentSection]);

  return (
    <div className="w-screen h-full bg-yellow-400">
      <Navbar
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <HomeSection
        currentSmoothie={currentSmoothie}
        goToSmoothies={() => {
          setCurrentSection(Section.Smoothies);
        }}
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
