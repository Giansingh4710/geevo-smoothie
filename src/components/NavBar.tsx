// src/components/Navbar.tsx
import React from "react";
import { Section } from "../assets/constants.tsx";

interface NavbarProps {
  currentSection: Section;
  setCurrentSection: React.Dispatch<React.SetStateAction<Section>>;
}

function Navbar({ currentSection, setCurrentSection }: NavbarProps) {
  const listItems = [];
  for (let section in Section) {
    listItems.push(
      <SectionListItem
        key={section}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        item={Section[section]}
      />,
    );
  }

  let sticky = "";
  sticky = "fixed top-0 left-0 z-50";
  return (
    <nav
      className={`${sticky} w-full flex flex-col md:flex-row  justify-between items-center py-6 px-10 bg-yellow-500 text-white`}
    >
      <div className="text-3xl font-bold">
        <span className="text-green-600">GEEVO </span>SM
        <span className="text-green-600">OO</span>THIES
      </div>
      <ul className="flex gap-4 ">{listItems}</ul>
    </nav>
  );
}

interface SectionListItemProps {
  currentSection: Section;
  setCurrentSection: React.Dispatch<React.SetStateAction<Section>>;
  item: Section;
}
function SectionListItem({
  currentSection,
  setCurrentSection,
  item,
}: SectionListItemProps) {
  const inSection = currentSection === item;
  const selectedStyles = inSection ? "font-bold text-pink-500" : "";
  return (
    <li
      onClick={() => setCurrentSection(item)}
      className={`flex-1 hover:underline ${selectedStyles}`}
    >
      {item}
    </li>
  );
}

export default Navbar;
