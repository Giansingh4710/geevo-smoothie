import { Section } from "@/assets/constants";
import React, { useState } from "react";

const ContactSection: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    setSuccess(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div id={Section.Contact} className="p-8 md:p-12 lg:p-16">
      <h2 className="text-4xl font-bold mb-4 text-center text-green-600">
        Contact Us
      </h2>
      <p className="mb-6 text-center  ">
        We’d love to hear from you! Please fill out the form below or reach us
        at:
      </p>
      <div className="mb-6 text-center">
        <p className="mb-2">
          <strong>Email:</strong>{" "}
          <a
            href="mailto:info@yourcompany.com"
            className="text-green-600 underline"
          >
            info@yourcompany.com
          </a>
        </p>
        <p className="mb-2">
          <strong>Phone:</strong>{" "}
          <a href="tel:+1234567890" className="text-green-600 underline">
            +1 (234) 567-890
          </a>
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg "
      >
        <label className="mb-2  ">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className=" bg-white border rounded p-2 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-green-500 "
          />
        </label>
        <label className="mb-2  ">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className=" bg-white border  rounded p-2 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </label>
        <label className="mb-2  ">
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className=" bg-white border rounded p-2 w-full h-32 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </label>
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded mt-4 hover:bg-green-600 transition duration-300"
        >
          Send Message
        </button>
        {success && (
          <p className="mt-4 text-green-600 text-center">
            Thank you for your message!
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactSection;
