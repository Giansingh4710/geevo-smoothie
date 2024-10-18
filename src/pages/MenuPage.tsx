import React, { useRef, useState, useEffect } from "react";
import {
  MenuItem,
  PAGES,
  SMOOTHIES,
  MILKSHAKES,
  ADDONS,
  COFFEES,
  OPTIONS,
  SPECIALITYDRINKS,
} from "../assets/constants.tsx";
import NavBar from "../components/NavBar.tsx";
import { atButtomOfPage } from "../assets/helpers.tsx";
import { FaPlus, FaCoffee } from "react-icons/fa";
import { RiDrinksLine } from "react-icons/ri";
import { TbMilkshake } from "react-icons/tb";
import { MdReplayCircleFilled } from "react-icons/md";

export default function MenuPage() {
  const [activeSection, setActiveSection] = useState("smoothies");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const sections = [
    {
      name: "Smoothies",
      items: SMOOTHIES,
      btn_icon: <RiDrinksLine />,
      btn_ref: useRef<HTMLButtonElement>(null),
      ref: useRef<HTMLDivElement>(null),
    },
    {
      name: "Milkshakes",
      items: MILKSHAKES,
      btn_icon: <TbMilkshake />,
      btn_ref: useRef<HTMLButtonElement>(null),
      ref: useRef<HTMLDivElement>(null),
    },
    {
      name: "Add-Ons",
      items: ADDONS,
      btn_icon: <FaPlus />,
      btn_ref: useRef<HTMLButtonElement>(null),
      ref: useRef<HTMLDivElement>(null),
    },
    {
      name: "Coffee",
      items: COFFEES,
      btn_icon: <FaCoffee />,
      btn_ref: useRef<HTMLButtonElement>(null),
      ref: useRef<HTMLDivElement>(null),
    },
    {
      name: "Options",
      items: OPTIONS,
      btn_icon: <MdReplayCircleFilled />,
      btn_ref: useRef<HTMLButtonElement>(null),
      ref: useRef<HTMLDivElement>(null),
    },
    {
      name: "Speciality Drinks",
      items: SPECIALITYDRINKS,
      btn_icon: <RiDrinksLine />,
      btn_ref: useRef<HTMLButtonElement>(null),
      ref: useRef<HTMLDivElement>(null),
    },
  ];

  const scrollToSection = (
    ref: React.RefObject<HTMLDivElement>,
    section: string
  ) => {
    if (ref.current) {
      const navbarHeight = 80; // Adjust this value based on your navbar height
      const yOffset = -navbarHeight;
      const y =
        ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(section);
    }
  };

  const handleCardClick = (item: MenuItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  useEffect(() => {
    function handleScroll() {
      const userPosY = window.scrollY;

      if (atButtomOfPage()) {
        setActiveSection(sections[sections.length - 1].name);
        scrollToActiveButton(sections[sections.length - 1].btn_ref);
        return;
      }

      const validSections = sections.filter(
        (section) => section.ref.current?.offsetTop
      );

      if (!validSections.length) return;

      const diffs = validSections.map((section) => ({
        ...section,
        diff: Math.abs(userPosY - section.ref.current.offsetTop),
      }));

      const closestSection = diffs.reduce((prev, curr) =>
        curr.diff < prev.diff ? curr : prev
      );

      setActiveSection(closestSection.name);
      scrollToActiveButton(closestSection.btn_ref);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 to-purple-100">
      <NavBar current_page={PAGES.menu} />
      <nav className="sticky top-0 bg-white shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-evenly p-2 overflow-x-auto whitespace-nowrap">
            {sections.map((section) => (
              <NavButton
                key={section.name}
                btn_ref={section.btn_ref}
                onClick={() => scrollToSection(section.ref, section.name)}
                isActive={activeSection === section.name}
                icon={section.btn_icon}
                text={section.name}
              />
            ))}
          </div>
        </div>
      </nav>
      <main className="flex-grow p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {sections.map((section) => (
            <MenuSection
              key={section.name}
              the_ref={section.ref}
              title={section.name}
              items={section.items}
              onCardClick={handleCardClick}
            />
          ))}
        </div>
      </main>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        item={selectedItem}
      />
    </div>
  );
}

const NavButton: React.FC<{
  btn_ref: React.RefObject<HTMLButtonElement>;
  onClick: () => void;
  isActive: boolean;
  icon: React.ReactElement;
  text: string;
}> = ({ btn_ref, onClick, isActive, text, icon }) => (
  <button
    ref={btn_ref}
    onClick={onClick}
    className={`
      flex items-center justify-center p-1 text-xs font-medium rounded-md
      transition-all duration-100 ease-in-out
      ${
        isActive
          ? "bg-pink-500 text-white shadow-md"
          : "text-pink-700 hover:bg-pink-100"
      }
      focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50
    `}
  >
    <span className="mr-2 text-lg">
      {React.cloneElement(icon, { className: "inline" })}
    </span>
    <span className="text-sm whitespace-nowrap">{text}</span>
  </button>
);

const MenuCard: React.FC<{
  item: MenuItem;
  onClick: (item: MenuItem) => void; // Add this prop
}> = ({ item, onClick }) => {
  return (
    <div
      onClick={() => onClick(item)} // Call the click handler
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 flex cursor-pointer" // Add cursor-pointer for better UX
    >
      <img src={item.pic} alt={item.name} className="w-1/3 h-32 object-cover" />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-pink-700 mb-1">
            {item.name}
          </h3>
          <p className="text-pink-600 text-sm mb-2 line-clamp-2">
            {item.description}
          </p>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="font-bold text-pink-700">{item.price}</span>
        </div>
      </div>
    </div>
  );
};

interface MenuSectionProps {
  the_ref: React.RefObject<HTMLDivElement>;
  title: string;
  items: MenuItem[];
  onCardClick: (item: MenuItem) => void;
}

function MenuSection({ the_ref, title, items, onCardClick }: MenuSectionProps) {
  return (
    <div id={title} className="mb-16">
      <h2 ref={the_ref} className="text-4xl font-bold text-pink-700 mb-8">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <MenuCard key={index} item={item} onClick={onCardClick} />
        ))}
      </div>
    </div>
  );
}

const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  item: any | null; // Adjust based on your item structure
}> = ({ isOpen, onClose, item }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose(); // Close the modal when Escape is pressed
      }
    };

    // Attach event listener
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      // Cleanup event listener on unmount
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!isOpen || !item) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.currentTarget === e.target) {
      onClose(); // Close the modal if the overlay is clicked
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20"
      onClick={handleOverlayClick} // Add click handler to the overlay
    >
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold text-pink-700 mb-4">{item.name}</h2>
        <img
          src={item.pic}
          alt={item.name}
          className="w-full h-48 object-cover mb-4 rounded"
        />
        <p className="text-gray-700">{item.description}</p>
        <div className="mt-4">
          <span className="font-bold text-pink-700">
            Price: {item.price} {/* Display the price */}
          </span>
        </div>
      </div>
    </div>
  );
};

function scrollToActiveButton(btnRef: React.RefObject<HTMLButtonElement>) {
  const container = btnRef.current?.parentElement;
  const button = btnRef.current;

  if (container && button) {
    const containerWidth = container.offsetWidth;
    const buttonOffsetLeft = button.offsetLeft;
    const buttonWidth = button.offsetWidth;

    const scrollPos = buttonOffsetLeft - containerWidth / 2 + buttonWidth / 2;

    container.scrollTo({
      left: scrollPos,
      behavior: "smooth",
    });
  }
}
