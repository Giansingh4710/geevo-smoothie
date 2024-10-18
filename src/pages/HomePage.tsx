import React, { useEffect, useState } from "react";
import { PAGES } from "../assets/constants";
import NavBar from "../components/NavBar.tsx";
// import logo from "../assets/pics/logo.jpg";
import logo from "../assets/pics/logo.png";
import promo from "../assets/pics/promo.jpg";
import { ADDONS } from "../assets/constants";

import herbo_protein1 from "../assets/pics/add_ons/herbo_protein_1.jpg";
import herbo_protein2 from "../assets/pics/add_ons/herbo_protein_2.jpg";
import herbo_protein3 from "../assets/pics/add_ons/herbo_protein_3.jpg";
import herbo_protein4 from "../assets/pics/add_ons/herbo_protein_4.jpg";
import herbo_protein5 from "../assets/pics/add_ons/herbo_protein_5.jpg";
import herbo_protein6 from "../assets/pics/add_ons/herbo_protein_6.jpg";

import { FaLeaf, FaHeart, FaShieldAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-pink-50">
      <NavBar current_page={PAGES.home} />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#ff7a50] via-[#ff7ade] to-[#ff87d3] text-white py-2 sm:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                  Welcome to Geevo Smoothie
                </h1>
                <p className="text-xl mb-8">
                  Discover a new twist on classic smoothies that will blow your
                  mind!
                </p>
                <button
                  className="bg-white text-pink-600 font-bold py-3 px-8 rounded hover:bg-pink-100 transition duration-300"
                  onClick={() => navigate(PAGES.menu.path)}
                >
                  Explore Our Smoothies
                </button>
              </div>

              <div className="md:w-1/2 flex justify-center">
                <img src={logo} alt="Geevo Smoothies" className="" />
              </div>
            </div>
          </div>
        </section>

        {/* Promo Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl sm:text-4xl font-bold text-pink-700 mb-4">
                  Enjoy Our Refreshing Smoothies, Milkshakes, and Tasty Bites!
                </h2>
                <p className="text-xl text-pink-600 mb-6">
                  Discover our delicious range of smoothies, milkshakes, and
                  mouthwatering bites. Whether you're craving something
                  refreshing or a quick snack, we’ve got just the treat to
                  satisfy your cravings and brighten your day!
                </p>
                <button
                  className="bg-pink-600 text-white font-bold py-3 px-8 rounded hover:bg-pink-700 transition duration-300"
                  onClick={() => navigate(PAGES.visitus.path)}
                >
                  Order Now
                </button>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={promo}
                  alt="Summer Special Smoothie"
                  className="w-full max-w-md rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Protein Pomo Section */}
        <HerboProteinPromo />

        {/* Benefits Section */}
        <section className="py-16 bg-pink-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-pink-700 mb-12">
              Why Choose Geevo Smoothies?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <BenefitCard
                icon={<FaLeaf className="text-4xl text-green-500" />}
                title="100% Natural Ingredients"
                description="We use only the freshest, highest-quality natural ingredients in our smoothies."
              />
              <BenefitCard
                icon={<FaHeart className="text-4xl text-red-500" />}
                title="Health-Focused Recipes"
                description="Our smoothies are crafted to provide maximum nutritional benefits for your well-being."
              />
              <BenefitCard
                icon={<FaShieldAlt className="text-4xl text-blue-500" />}
                title="Immune System Boost"
                description="Packed with vitamins and antioxidants to strengthen your immune system naturally."
              />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Try Geevo Smoothies?
            </h2>
            <p className="text-xl mb-8">
              Visit us today and experience the delicious difference!
            </p>
            <button
              className="bg-white text-pink-600 font-bold py-3 px-8 rounded hover:bg-pink-100 transition duration-300"
              onClick={() => navigate(PAGES.visitus.path)}
            >
              Find Our Location
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition duration-300">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-pink-700 mb-2">{title}</h3>
      <p className="text-pink-600">{description}</p>
    </div>
  );
}

function HerboProteinPromo() {
  const herbo_protein_pics = [
    herbo_protein1,
    herbo_protein2,
    herbo_protein3,
    herbo_protein4,
    herbo_protein5,
    herbo_protein6,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const nextSlide = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === herbo_protein_pics.length - 1 ? 0 : prevIndex + 1
      );
      setProgress(0);
      setFadeOut(false);
    }, 300);
  };

  const prevSlide = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? herbo_protein_pics.length - 1 : prevIndex - 1
      );
      setProgress(0);
      setFadeOut(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          nextSlide();
          return 0;
        }
        return prevProgress + 2; // Increase by 2% every 100ms
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-pink-100 to-purple-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
            <div className="relative w-full max-w-md">
              <div className="flex w-80 sm:w-full h-80 relative rounded-lg shadow-xl">
                <img
                  src={herbo_protein_pics[currentIndex]}
                  alt={`Herbo Protein ${currentIndex + 1}`}
                  className={`  w-full h-full object-contain transition-opacity duration-300 ${
                    fadeOut ? "opacity-0" : "opacity-100"
                  }`}
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
                <div
                  className="h-full bg-pink-500 transition-all duration-100"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 text-pink-700 hover:bg-opacity-75 transition-all duration-300"
              >
                &#10094;
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 text-pink-700 hover:bg-opacity-75 transition-all duration-300"
              >
                &#10095;
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-pink-700 mb-4">
              Try our new Herbo Protein in Any Smoothie or Milkshake
            </h2>
            <p className="text-xl text-pink-600 mb-6">
              {ADDONS[5].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HomePage;
