import React from "react";
import storePic from "../assets/pics/store.jpg";
import { Section } from "@/assets/constants";

const LocationSection: React.FC = () => {
  const address = "372 Canton Hwy, Cumming, GA 30040";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <div
      id={Section.Location}
      className="relative min-h-screen overflow-hidden"
    >
      <img
        src={storePic}
        alt="Smoothie Shop"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-purple-900 bg-opacity-70 text-white p-4">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-pink-300">
            Visit Us
          </h2>
          <p className="text-xl sm:text-2xl mb-4">We are located at:</p>
          <a
            href={googleMapsUrl}
            className="block mt-4 text-lg sm:text-xl font-semibold underline text-pink-300 hover:text-pink-200 transition duration-300"
          >
            <p>{address}</p>
          </a>
          <p className="text-lg sm:text-xl mt-6">
            Open daily from 8 AM to 8 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
