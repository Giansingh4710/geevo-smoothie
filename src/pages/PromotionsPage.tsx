import React from "react";
import { PAGES } from "../assets/constants";
import NavBar from "../components/NavBar.tsx";
import { FaGift, FaBirthdayCake, FaPercent } from "react-icons/fa";

const PromotionsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 to-purple-100">
      <NavBar current_page={PAGES.promotions} />
      <main className="flex-grow p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-700 text-center mb-12">
            Current Promotions
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PromotionCard
              icon={<FaGift className="text-4xl text-pink-500" />}
              title="7th Smoothie Free"
              description="Buy 6 smoothies and get your 7th one free! It's our way of saying thank you for your loyalty."
            />
            <PromotionCard
              icon={<FaBirthdayCake className="text-4xl text-pink-500" />}
              title="Birthday Smoothie Free"
              description="Celebrate your birthday with us! Enjoy a free smoothie of your choice on your special day."
            />
            <PromotionCard
              icon={<FaPercent className="text-4xl text-pink-500" />}
              title="50% Off for First-Time Customers"
              description="New to Geevo Smoothies? Get 50% off your first purchase during the month of October!"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

interface PromotionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PromotionCard: React.FC<PromotionCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="p-6">
        <div className="flex items-center justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-pink-700 mb-2 text-center">
          {title}
        </h3>
        <p className="text-pink-600 text-center">{description}</p>
      </div>
    </div>
  );
};

export default PromotionsPage;
