import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link to="/">ShopEase</Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-6 text-gray-700 font-medium">
          <NavLink to="/" className="hover:text-blue-600">Home</NavLink>
          <NavLink to="/shop" className="hover:text-blue-600">Shop</NavLink>
          <NavLink to="/deals" className="hover:text-blue-600">Deals</NavLink>
          <NavLink to="/contact" className="hover:text-blue-600">Contact</NavLink>
        </ul>

        {/* Search Bar (desktop only) */}
        <div className="hidden lg:flex items-center border rounded-md px-2 py-1 w-1/3">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full outline-none px-2"
          />
          <button className="text-gray-600 hover:text-blue-600">🔍</button>
        </div>

        {/* Account + Cart + Mobile Toggle */}
        <div className="flex items-center space-x-4 relative">
          {/* Profile Icon */}
          <button
            className="text-gray-700 hover:text-blue-600"
            onClick={() => setProfileOpen(!profileOpen)}
          >
            👤
          </button>

          {/* Profile Dropdown */}
          {profileOpen && (
            <div className="absolute right-2 top-1 mt-10 w-32 bg-white border rounded-md shadow-lg lg:mt-12">
              <Link
                to="/login"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setProfileOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setProfileOpen(false)}
              >
                Register
              </Link>
            </div>
          )}

          {/* Cart */}
          <div className="relative">
            <Link to="/cart" className="text-gray-700 hover:text-blue-600 text-2xl">🛒</Link>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 rounded-full">
              3
            </span>
          </div>

          {/* Hamburger Menu */}
          <button
            className="lg:hidden text-gray-700 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-gray-100 transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 py-2 space-y-2">
          <NavLink to="/" className="block text-gray-700 hover:text-blue-600">Home</NavLink>
          <NavLink to="/shop" className="block text-gray-700 hover:text-blue-600">Shop</NavLink>
          <NavLink to="/deals" className="block text-gray-700 hover:text-blue-600">Deals</NavLink>
          <NavLink to="/contact" className="block text-gray-700 hover:text-blue-600">Contact</NavLink>
          <div className="flex items-center border rounded-md px-2 py-1 mt-2">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full outline-none px-2"
            />
            <button className="text-gray-600 hover:text-blue-600">🔍</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;