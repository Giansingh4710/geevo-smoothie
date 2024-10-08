import React from "react";
import { ADDONS, MILKSHAKES, SMOOTHIES, Section } from "../assets/constants.tsx";
import { Smoothie } from "../assets/types.tsx";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

function SmoothiesSection({
  currentSmoothie,
  setCurrentSmoothie,
}: {
  currentSmoothie: Smoothie;
  setCurrentSmoothie: React.Dispatch<React.SetStateAction<Smoothie>>;
}) {
  return (
    <div>
      <div id={Section.Smoothies} className="bg-purple-100  border-b border-purple-300">
        {/* <div className="m-4 sm:m-8 lg:my-0 text-center"> */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-4 ">
            Smoothies
          </h1>
          <div className="w-32 h-1 mx-auto bg-pink-400"></div>
        </div>
        <div className="flex overflow-x-auto gap-4 sm:justify-evenly p-4 sm:p-6 ">
          {SMOOTHIES.map((smoothie, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <button
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
                onClick={() => {
                  // document.getElementById(Section.TheSmoothie).scrollIntoView({ behavior: "smooth" });
                  setCurrentSmoothie(smoothie);
                }}
              >
                <img
                  src={smoothie.pic}
                  alt={`Smoothie ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
              <p className="text-center text-sm sm:text-lg mt-2 sm:mt-3 font-semibold text-purple-700">
                {smoothie.name}
              </p>
              {currentSmoothie?.name === smoothie.name && (
                <div className="w-16 sm:w-20 h-1 mt-1 sm:mt-2 bg-pink-400"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-purple-100  border-b border-purple-300">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-4 ">
            Add Ons
          </h1>
          <div className="w-32 h-1 mx-auto bg-pink-400"></div>
        </div>
        <div className="flex overflow-x-auto gap-4 sm:justify-evenly p-4 sm:p-6 ">
          {ADDONS.map((addOn, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <button
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
                onClick={() => {}}
              >
                <img
                  src={addOn.pic}
                  alt={`Smoothie ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
              <p className="text-center text-sm sm:text-lg mt-2 sm:mt-3 font-semibold text-purple-700">
                {addOn.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-purple-100  border-b border-purple-300">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-4 ">
            Milkshakes
          </h1>
          <div className="w-32 h-1 mx-auto bg-pink-400"></div>
        </div>
        <div className="flex overflow-x-auto gap-4 sm:justify-evenly p-4 sm:p-6 ">
          {MILKSHAKES.map((milkshake, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <button
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
                onClick={() => {}}
              >
                <img
                  src={milkshake.pic}
                  alt={`Smoothie ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
              <p className="text-center text-sm sm:text-lg mt-2 sm:mt-3 font-semibold text-purple-700">
                {milkshake.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SmoothiesSection;
