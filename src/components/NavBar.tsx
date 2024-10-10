import React, { useState } from "react";
import { PAGES, Page } from "../assets/constants.tsx";
import { Link } from "react-router-dom";
import logo from "../assets/pics/logo.jpg";

function Navbar({ current_page }: { current_page: Page }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [];
  for (const page in PAGES) {
    navLinks.push(
      <NavLink
        key={page}
        to={PAGES[page].path}
        label={PAGES[page].title}
        isCurrPage={current_page.title === PAGES[page].title}
        closeMenu={toggleMenu}
      />
    );
  }

  return (
    <nav className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              {/* <img src={logo} alt="Geevo Smoothies" className="h-10 w-10 rounded-full" /> */}
              <p className="text-2xl font-bold">Geevo Smoothies</p>

            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">{navLinks}</div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">{navLinks}</div>
      </div>
    </nav>
  );
}

interface NavLinkProps {
  to: string;
  label: string;
  isCurrPage: boolean;
  closeMenu: () => void;
}

function NavLink({ to, label, closeMenu, isCurrPage }: NavLinkProps) {
  const baseStyles = "px-3 py-2 rounded-md text-sm font-medium";
  const activeStyles = "bg-pink-700 text-white";
  const inactiveStyles = "text-white hover:bg-pink-600 hover:text-white";

  return (
    <Link
      to={to}
      onClick={closeMenu}
      className={`${baseStyles} ${isCurrPage ? activeStyles : inactiveStyles}`}
    >
      {label}
    </Link>
  );
}

export default Navbar;
