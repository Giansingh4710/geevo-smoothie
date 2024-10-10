import React from "react";
import { PAGES } from "../assets/constants";
import NavBar from "../components/NavBar.tsx";

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-pink-50">
      <NavBar current_page={PAGES.about} />
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-pink-700 text-center mb-8">
            About Us
          </h1>
          <div className="space-y-6 text-pink-800">
            <p className="text-lg sm:text-xl leading-relaxed">
              Welcome to{" "}
              <span className="font-semibold text-pink-600">
                Geevo Smoothies
              </span>
              , where we believe that health and flavor go hand in hand. As a
              clean smoothie company, our mission is to provide you with the
              best-tasting, nutrient-rich smoothies made from only the highest
              quality ingredients.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed">
              At{" "}
              <span className="font-semibold text-pink-600">
                Geevo Smoothies
              </span>
              , we are passionate about creating blends that not only delight
              your palate but also nourish your body. Our smoothies are crafted
              using fresh, whole ingredients, free from artificial additives,
              preservatives, and refined sugars.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed">
              We understand that your wellness journey is unique, which is why
              we offer a diverse range of smoothies tailored to fit your
              lifestyle. Whether you're looking for a post-workout boost, a meal
              replacement, or a refreshing snack, we have something for
              everyone.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed">
              Join us in redefining what a smoothie can be. Taste the difference
              of clean, wholesome ingredients with every delicious blend. Your
              health deserves nothing less!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AboutPage;
