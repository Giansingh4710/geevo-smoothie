import React from "react";
import { PAGES, MILKSHAKES, Milkshake } from "../assets/constants.tsx";
import NavBar from "../components/NavBar.tsx";

export default function MilkshakesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 to-purple-100">
      <NavBar current_page={PAGES.milkshakes} />
      <main className="flex-grow p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-700 text-center mb-12">
            Our Delicious Milkshakes
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {MILKSHAKES.map((milkshake, index) => (
              <MilkshakeCard key={index} milkshake={milkshake} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

const MilkshakeCard: React.FC<{ milkshake: Milkshake }> = ({ milkshake }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <img
        src={milkshake.pic}
        alt={milkshake.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-pink-700 mb-2">
          {milkshake.name}
        </h2>
        <p className="text-pink-600 mb-4">{milkshake.description}</p>
        <div className="flex justify-between items-center">
          <div className="text-sm">
            <span className="font-medium text-pink-600">Small</span>
            <span className="ml-2 font-bold text-pink-700">$4.99</span>
          </div>
          <div className="text-sm">
            <span className="font-medium text-pink-600">Large</span>
            <span className="ml-2 font-bold text-pink-700">$5.50</span>
          </div>
        </div>
      </div>
    </div>
  );
};
