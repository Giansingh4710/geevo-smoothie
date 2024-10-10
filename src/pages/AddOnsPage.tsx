import React from "react";
import { PAGES, ADDONS, AddOn } from "../assets/constants.tsx";
import NavBar from "../components/NavBar.tsx";

export default function AddOnsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 to-purple-100">
      <NavBar current_page={PAGES.addons} />
      <main className="flex-grow p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-700 text-center mb-12">
            Our Delicious Add-Ons
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ADDONS.map((addOn, index) => (
              <AddOnCard key={index} addOn={addOn} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

const AddOnCard: React.FC<{ addOn: AddOn }> = ({ addOn }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <img
        src={addOn.pic}
        alt={addOn.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-pink-700 mb-2">
          {addOn.name}
        </h2>
        <p className="text-pink-600 mb-4">{addOn.description}</p>
        <div className="flex justify-between items-center">
          <span className="font-medium text-pink-600">Price</span>
          <span className="font-bold text-pink-700">$1.50</span>
        </div>
      </div>
    </div>
  );
};
