import React from "react";
import { Smoothie } from "../assets/types";
import { Section } from "../assets/constants.tsx";

interface HomeProps {
  currentSmoothie: Smoothie;
  goToSmoothies: () => void;
}

function HomeSection({ currentSmoothie, goToSmoothies }: HomeProps) {
  return (
    <section
      id={Section.Home}
      className="h-screen text-black py-16 px-10 flex flex-col lg:flex-row justify-between items-center"
    >
      <div className="lg:w-1/2">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-green-600">Geevo </span>
          SM<span className="text-green-600">OO</span>THIES!!
        </h1>
        <p className="mt-4 text-xl ">
          a new twist on a classic item that is ready to blow your minds
        </p>
        <button
          className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600"
          onClick={goToSmoothies}
        >
          Check Out Our Smoothies
        </button>
      </div>
      <div className="lg:w-1/2 mt-10  ">
        <img
          src={currentSmoothie.pic} // replace with actual image path
          alt="Smoothie Bowl"
          className="size-80 rounded-full shadow-xl"
        />
        <div>
          <p className="text-xl">{currentSmoothie.description}</p>
        </div>
      </div>
    </section>
  );
}
export default HomeSection;
