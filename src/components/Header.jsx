import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../Context/CartContext";

const Header = () => {
  const { cartCount } = useCart();

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-indigo-600 tracking-wide">
          <Link to="/">MyWatches</Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 font-medium text-gray-700">
          <Link to="/" className="hover:text-indigo-600 transition">
            Home
          </Link>
          <Link to="/services" className="hover:text-indigo-600 transition">
            Products
          </Link>
          <Link to="/contact" className="hover:text-indigo-600 transition">
            Contact
          </Link>
          <Link to="/about" className="hover:text-indigo-600 transition">
            About
          </Link>
        </nav>

        {/* Auth & Cart */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="px-4 py-1.5 text-indigo-600 border border-indigo-600 rounded hover:bg-indigo-50 transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-1.5 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Sign Up
          </Link>

          {/* Cart Icon */}
          <button className="relative text-indigo-600">
            <ShoppingCartIcon style={{ fontSize: 26 }} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
