import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({cartCount }) => {

  
  return (
    <header className="shadow-md py-4 px-6 bg-black">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">My Watches</div>

        {/* Menu (Desktop) */}
        <nav className="hidden md:flex gap-8 text-white font-medium">
          <a href="#" className="hover:text-blue-600 transition">Home</a>
          <a href="#" className="hover:text-blue-600 transition">Products</a>
          <a href="#" className="hover:text-blue-600 transition">About</a>
          <a href="#" className="hover:text-blue-600 transition">Contact</a>
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          {/* Cart Button */}
          <button className="relative">
            <ShoppingCartIcon style={{ fontSize: 28 }} className="text-white" />
            <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
            </span>
          </button>

          {/* Mobile Menu Icon */}
          <button className="md:hidden">
            <MenuIcon style={{ fontSize: 28 }} className="text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
