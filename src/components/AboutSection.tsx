import { Section } from "@/assets/constants";
import React from "react";

function AboutSection() {
  return (
    <section id={Section.About} className="about-section p-8 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="text-lg mb-4">
        Welcome to <strong>Geevo Smoothies</strong>, where we believe that
        health and flavor go hand in hand. As a clean smoothie company, our
        mission is to provide you with the best-tasting, nutrient-rich smoothies
        made from only the highest quality ingredients.
      </p>
      <p className="text-lg mb-4">
        At <strong>Geevo Smoothies</strong>, we are passionate about creating
        blends that not only delight your palate but also nourish your body. Our
        smoothies are crafted using fresh, whole ingredients, free from
        artificial additives, preservatives, and refined sugars. We source our
        fruits, vegetables, and superfoods from trusted local suppliers,
        ensuring every sip is packed with flavor and health benefits.
      </p>
      <p className="text-lg mb-4">
        We understand that your wellness journey is unique, which is why we
        offer a diverse range of smoothies tailored to fit your lifestyle.
        Whether you're looking for a post-workout boost, a meal replacement, or
        a refreshing snack, we have something for everyone.
      </p>
      <p className="text-lg mb-4">
        Join us in redefining what a smoothie can be. Taste the difference of
        clean, wholesome ingredients with every delicious blend. Your health
        deserves nothing less!
      </p>
    </section>
  );
}

export default AboutSection;
