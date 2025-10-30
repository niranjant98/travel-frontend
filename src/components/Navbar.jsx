import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-white shadow-md py-4 px-6 sm:px-10 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          <Link to="/" onClick={closeMenu}>TravelBuddy ✈️</Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-blue-600 transition" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-600 transition" onClick={closeMenu}>About</Link></li>
          <li><Link to="/bookings" className="hover:text-blue-600 transition" onClick={closeMenu}>Bookings</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600 transition" onClick={closeMenu}>Contact Us</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 bg-white shadow-lg rounded-lg p-4 space-y-3 text-gray-700 font-medium">
          <Link to="/" onClick={closeMenu} className="block hover:text-blue-600">Home</Link>
          <Link to="/about" onClick={closeMenu} className="block hover:text-blue-600">About</Link>
          <Link to="/bookings" onClick={closeMenu} className="block hover:text-blue-600">Bookings</Link>
          <Link to="/contact" onClick={closeMenu} className="block hover:text-blue-600">Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
