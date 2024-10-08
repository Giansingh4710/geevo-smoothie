import React from "react";
import { Smoothie } from "../assets/types.tsx";
import { Section } from "../assets/constants.tsx";

interface HomeProps {
  currentSmoothie: Smoothie;
}

function HomeSection({ currentSmoothie }: HomeProps) {
  return (
    <section
      id={Section.Home}
      className="min-h-screen bg-purple-100 text-purple-900 py-16 px-4 sm:px-10 flex flex-col lg:flex-row justify-between items-center"
    >
      <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
          Welcome to
          <div>
            <span className="text-pink-500">Geevo </span>
            SM<span className="text-pink-500">OO</span>THIES!!
          </div>
        </h1>
        <p className="mt-4 text-lg sm:text-xl">
          a new twist on a classic item that is ready to blow your minds
        </p>
        <button
          className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition duration-300"
          onClick={() => {
            document
              .getElementById(Section.Smoothies)
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Check Out Our Smoothies
        </button>
      </div>
      <div
        className="lg:w-1/2 flex flex-col items-center"
        id={Section.TheSmoothie}
      >
        <img
          src={currentSmoothie.pic}
          alt="Smoothie Bowl"
          className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-full shadow-xl border-4 border-pink-300"
        />
        <div className="mt-6 text-center">
          <p className="text-lg sm:text-xl italic text-purple-700">
            {currentSmoothie.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
