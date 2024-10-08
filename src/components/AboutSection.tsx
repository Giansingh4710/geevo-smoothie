import { Section } from "@/assets/constants";
import React from "react";

function AboutSection() {
  return (
    <section
      id={Section.About}
      className="about-section p-4 sm:p-8 bg-purple-50 text-purple-900 text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-purple-800">
        About Us
      </h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-base sm:text-lg mb-4">
          Welcome to <strong className="text-pink-600">Geevo Smoothies</strong>,
          where we believe that health and flavor go hand in hand. As a clean
          smoothie company, our mission is to provide you with the best-tasting,
          nutrient-rich smoothies made from only the highest quality
          ingredients.
        </p>
        <p className="text-base sm:text-lg mb-4">
          At <strong className="text-pink-600">Geevo Smoothies</strong>, we are
          passionate about creating blends that not only delight your palate but
          also nourish your body. Our smoothies are crafted using fresh, whole
          ingredients, free from artificial additives, preservatives, and
          refined sugars.
        </p>
        <p className="text-base sm:text-lg mb-4">
          We understand that your wellness journey is unique, which is why we
          offer a diverse range of smoothies tailored to fit your lifestyle.
          Whether you're looking for a post-workout boost, a meal replacement,
          or a refreshing snack, we have something for everyone.
        </p>
        <p className="text-base sm:text-lg mb-4">
          Join us in redefining what a smoothie can be. Taste the difference of
          clean, wholesome ingredients with every delicious blend. Your health
          deserves nothing less!
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
