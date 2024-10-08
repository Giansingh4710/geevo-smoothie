import React, { useState } from "react";
import { Section } from "../assets/constants.tsx";
import logo from "../../public/logo.jpg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-purple-700 text-white">
      <div className="flex justify-between md:justify-center items-center px-4 py-2">
        <div className="flex text-2xl sm:text-3xl font-bold gap-2">
          <img
            src={logo}
            alt="Geevo Smoothies Logo"
            className=" w-24 h-10 object-cover rounded"
          />
          <div className="flex items-center">
            SM<span className="text-pink-300">OO</span>THIES
          </div>
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            )}
          </svg>
        </button>
      </div>

      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } px-4 pb-4 md:flex md:justify-end md:items-center md:space-x-6 md:pb-0 md:justify-center md:py-2`}
      >
        <SectionListItem
          item={Section.Home}
          closeMenu={() => setIsMenuOpen(false)}
        />
        <SectionListItem
          item={Section.Smoothies}
          closeMenu={() => setIsMenuOpen(false)}
        />
        <SectionListItem
          item={Section.About}
          closeMenu={() => setIsMenuOpen(false)}
        />
        <SectionListItem
          item={Section.Location}
          closeMenu={() => setIsMenuOpen(false)}
        />
        <SectionListItem
          item={Section.Contact}
          closeMenu={() => setIsMenuOpen(false)}
        />
      </ul>
    </nav>
  );
}

interface SectionListItemProps {
  item: Section;
  closeMenu: () => void;
}

function SectionListItem({ item, closeMenu }: SectionListItemProps) {
  return (
    <li
      onClick={() => {
        document.getElementById(item).scrollIntoView({ behavior: "smooth" });
        closeMenu();
      }}
      className={
        "py-2 md:py-0 hover:text-pink-200 transition duration-300 cursor-pointer font-bold text-pink-300"
      }
    >
      {item}
    </li>
  );
}

export default Navbar;
