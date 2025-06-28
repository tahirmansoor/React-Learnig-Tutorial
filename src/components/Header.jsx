import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <div className="text-xl font-bold text-blue-600">
          <Link to="/">MyWatches</Link>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden md:flex gap-8 font-medium text-gray-700">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link to="/services" className="hover:text-blue-600 transition">
            Products
          </Link>
          <Link to="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
          <Link to="/about" className="hover:text-blue-600 transition">
            About
          </Link>
        </nav>

        {/* Right: Auth Buttons */}
        <div className="hidden md:flex gap-4">
          <Link
            to="/login"
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>

          <button className="relative">
            <ShoppingCartIcon style={{ fontSize: 26 }} className="text-white" />
            <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
