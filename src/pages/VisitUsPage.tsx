import React from "react";
import { PAGES } from "../assets/constants";
import NavBar from "../components/NavBar.tsx";
import storePic from "../assets/pics/store.jpg";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const VisitUsPage: React.FC = () => {
  const address = "372 Canton Hwy, Cumming, GA 30040";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address,
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 to-purple-100">
      <NavBar current_page={PAGES.visitus} />
      <main className="flex-grow p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-700 text-center mb-12">
            Visit Us
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Business Hours">
              <BusinessHours />
            </Card>

            <Card title="Location">
              <img
                src={storePic}
                alt="Geevo Smoothies Store"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <ContactItem
                icon={<FaMapMarkerAlt className="text-pink-500 text-xl" />}
                content={address}
                href={googleMapsUrl}
              />
            </Card>

            <Card title="Contact Us">
              <div className="space-y-4">
                <ContactItem
                  icon={<FaPhone className="text-pink-500 text-xl" />}
                  content="+1 (234) 567-890"
                  href="tel:+1234567890"
                />
                <ContactItem
                  icon={<FaEnvelope className="text-pink-500 text-xl" />}
                  content="jiwankaur55@gmail.com"
                  href="mailto:jiwankaur55@gmail.com"
                />
              </div>
              <h2 className="text-lg font-semibold text-pink-700 mt-6">
                Connect with Us
              </h2>
              <div className="flex space-x-4 mt-4">
                {/* <SocialLink href="https://twitter.com" icon={<FaTwitter />} /> */}
                <SocialLink href="https://www.facebook.com/people/Geevo-Smoothie/61567061822100/" icon={<FaFacebookF />} />
                <SocialLink href="https://www.instagram.com/geevosmoothies/" icon={<FaInstagram />} />
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

const Card: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold text-pink-700 mb-4">{title}</h2>
    {children}
  </div>
);

const ContactItem: React.FC<{
  icon: React.ReactNode;
  content: string;
  href: string;
}> = ({ icon, content, href }) => (
  <div className="flex items-center space-x-3">
    {icon}
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-pink-600 hover:text-pink-800 transition duration-300"
    >
      {content}
    </a>
  </div>
);

const BusinessHours: React.FC = () => {
  const hours = [
    { day: "Mon - Fri", hours: "7:00 AM - 7:00 PM" },
    { day: "Saturday", hours: "11:00 AM - 8:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <ul className="space-y-2">
      {hours.map((schedule, index) => (
        <li key={index} className="flex justify-between items-center">
          <span className="font-medium text-pink-600">{schedule.day}</span>
          <span className="text-pink-700">{schedule.hours}</span>
        </li>
      ))}
    </ul>
  );
};

const SocialLink: React.FC<{ href: string; icon: React.ReactNode }> = ({
  href,
  icon,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition duration-300"
  >
    {icon}
  </a>
);

export default VisitUsPage;
