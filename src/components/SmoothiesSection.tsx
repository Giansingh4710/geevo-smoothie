import React from "react";
import { SMOOTHIES, Section } from "../assets/constants.tsx";
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
    <div id={Section.Smoothies}>
      <div className="m-8 lg:my-0 ">
        <h1 className="text-3xl font-bold">Smoothies</h1>
        <div className="w-28 h-1 flex self-center bg-gray-200"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 p-6">
        {SMOOTHIES.map((smoothie, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <button
              className="w-28 h-28 rounded-full bg-gray-200 overflow-hidden"
              onClick={() => setCurrentSmoothie(smoothie)}
            >
              <img
                src={smoothie.pic}
                alt={`Smoothie ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
            <p className="text-center text-xs mt-2">{smoothie.name}</p>
            {currentSmoothie?.name === smoothie.name && (
              <div className="w-20 h-1 mt-1 bg-gray-200"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SmoothiesSection;
