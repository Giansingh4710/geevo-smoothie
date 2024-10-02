import React from "react";
import storePic from "../assets/pics/store.jpg";
import { Section } from "@/assets/constants";

const LocationSection: React.FC = () => {
  const address = "372 Canton Hwy, Cumming, GA 30040"; // Your address
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <div id={Section.Location} className="relative h-screen overflow-hidden">
      <img
        src={storePic}
        alt="Smoothie Shop"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center   text-white p-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Visit Us</h2>
          <p className="text-xl">We are located at:</p>
          <a
            href={`${googleMapsUrl}`} // This will open the maps app
            className="block mt-4 text-lg font-semibold underline"
          >
            <p className="text-lg font-semibold">{address}</p>
          </a>
          <p className="text-lg">Open daily from 8 AM to 8 PM</p>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
