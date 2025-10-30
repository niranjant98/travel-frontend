import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-800 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Brand Section */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-blue-700">Charan-Adventures ✈️</h2>
          <p className="text-gray-600 mt-2">
            Explore the world with comfort and confidence.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 font-medium">
          <Link
            to="/"
            className="hover:text-blue-700 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-700 transition duration-200"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-700 transition duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-300 mt-6 pt-4 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Charan-Adventures. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
