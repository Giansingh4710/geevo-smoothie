import { Section } from "@/assets/constants";
import React from "react";

const ContactSection: React.FC = () => {
  return (
    <div
      id={Section.Contact}
      className="p-4 sm:p-8 md:p-12 lg:p-16 bg-purple-50"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-purple-800">
        Contact Us
      </h2>
      <p className="mb-6 text-center text-purple-700">
        We'd love to hear from you! Get in touch with us using the information
        below:
      </p>
      <div className="text-center">
        <p className="mb-4">
          <strong className="text-purple-800">Email:</strong>{" "}
          <a
            href="mailto:info@geevosmoothies.com"
            className="text-pink-600 hover:text-pink-700 transition duration-300"
          >
            info@geevosmoothies.com
          </a>
        </p>
        <p className="mb-4">
          <strong className="text-purple-800">Phone:</strong>{" "}
          <a
            href="tel:+1234567890"
            className="text-pink-600 hover:text-pink-700 transition duration-300"
          >
            +1 (234) 567-890
          </a>
        </p>
      </div>
      <p className="mt-8 text-center text-purple-700">
        We're always happy to answer any questions or hear your feedback!
      </p>
    </div>
  );
};

export default ContactSection;
