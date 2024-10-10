import React from "react";
import { PAGES } from "../assets/constants";
import NavBar from "../components/NavBar.tsx";
import logo from "../assets/pics/logo.jpg";
import promo from "../assets/pics/promo.jpg";
import { FaLeaf, FaHeart, FaShieldAlt } from "react-icons/fa";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-pink-50">
      <NavBar current_page={PAGES.home} />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                  Welcome to Geevo Smoothies
                </h1>
                <p className="text-xl mb-8">
                  Discover a new twist on classic smoothies that will blow your
                  mind!
                </p>
                <button
                  className="bg-white text-pink-600 font-bold py-3 px-8 rounded hover:bg-pink-100 transition duration-300"
                  onClick={() => {
                    window.location.href = "/smoothies";
                  }}
                >
                  Explore Our Smoothies
                </button>
              </div>
              <div className=" md:w-1/2 flex justify-center">
                <img
                  src={logo}
                  alt="Geevo Smoothies"
                  className="w-64 h-24 sm:w-80 sm:h-56 object-cover rounded border-4 border-white shadow-2xl"
                />
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
                  Try Our Summer Special!
                </h2>
                <p className="text-xl text-pink-600 mb-6">
                  Introducing our refreshing Tropical Paradise Smoothie. A
                  perfect blend of mango, pineapple, and coconut to transport
                  you to a sunny beach!
                </p>
                <button
                  className="bg-pink-600 text-white font-bold py-3 px-8 rounded hover:bg-pink-700 transition duration-300"
                  onClick={() => {
                    window.location.href = "/smoothies";
                  }}
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

        {/* Benefits Section */}
        <section className="py-16 bg-pink-100">
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
              onClick={() => {
                window.location.href = "/visitus";
              }}
            >
              Find Our Location
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

const BenefitCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition duration-300">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-pink-700 mb-2">{title}</h3>
    <p className="text-pink-600">{description}</p>
  </div>
);

export default HomePage;
