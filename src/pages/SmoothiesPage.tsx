import React from "react";
import { Smoothie, SMOOTHIES, PAGES } from "../assets/constants.tsx";
import NavBar from "../components/NavBar.tsx";

function SmoothiesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 to-purple-100">
      <NavBar current_page={PAGES.smoothies} />
      <main className="flex-grow p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-700 text-center mb-12">
            Our Delicious Smoothies
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SMOOTHIES.map((smoothie, index) => (
              <SmoothieCard key={index} smoothie={smoothie} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

const SmoothieCard: React.FC<{ smoothie: Smoothie }> = ({ smoothie }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <img
        src={smoothie.pic}
        alt={smoothie.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-pink-700 mb-2">
          {smoothie.name}
        </h2>
        <p className="text-pink-600 mb-4">{smoothie.description}</p>
        <div className="flex justify-between items-center">
          <div className="text-sm">
            <span className="font-medium text-pink-600">Small</span>
            <span className="ml-2 font-bold text-pink-700">$6.95</span>
          </div>
          <div className="text-sm">
            <span className="font-medium text-pink-600">Large</span>
            <span className="ml-2 font-bold text-pink-700">$7.95</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmoothiesPage;
