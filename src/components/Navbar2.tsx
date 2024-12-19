"use client"; // To ensure it's a client-side component

import { useState } from "react";
import Link from "next/link";
import { FiShoppingCart, FiUser, FiSearch, FiHeart } from "react-icons/fi";


const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <header className="bg-white text-gray-800 hover:text-yellow-600 shadow-md">
      <div className="max-w-7xl mx-auto py-4 flex items-center justify-between px-20 text-xl">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-accent text-yellow-600">
        Meubel-House
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-accent">
            Home
          </Link>
          <Link href="/shop" className="hover:text-accent">
            Shop
          </Link>
          <Link href="/about" className="hover:text-accent">
            About
          </Link>
          <Link href="/contact" className="hover:text-accent">
            Contact
          </Link>
        </nav>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/my-account">
          <FiUser className="text-lg hover:text-accent cursor-pointer" />
          </Link>
          <Link href="/wishlist">
          <FiHeart className="text-lg hover:text-accent cursor-pointer" />
          </Link>
        {/* Search Block */}
        <div className="relative">
          <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <FiSearch className="w-6 h-4" />
          </button>

          {/* Conditional Search Input */}
          {isSearchOpen && (
            <div className="absolute top-full mt-2 bg-white text-black ">
              <input
                type="text"
                placeholder="Search..."
                className="px-1 py-1 z-20 rounded border-2 focus:outline-1"
                onBlur={() => setIsSearchOpen(false)} // Close input when focus is lost
              />
            </div>
          )}
            </div>
          <Link href="/cart">
          <FiShoppingCart className="text-lg hover:text-accent cursor-pointer" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-primary md:hidden">
          <nav className="flex flex-col space-y-2 p-4">
            <Link href="/" className="block text-gray-800 hover:text-accent">
              Home
            </Link>
            <Link href="/shop" className="block text-gray-800 hover:text-accent">
              Shop
            </Link>
            <Link href="/about" className="block text-gray-800 hover:text-accent">
              About
            </Link>
            <Link href="/contact" className="block text-gray-800 hover:text-accent">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4 p-4">
            <FiUser className="text-lg hover:text-accent cursor-pointer" />
            <FiHeart className="text-lg hover:text-accent cursor-pointer" />
            <FiSearch className="text-lg hover:text-accent cursor-pointer" />
            <FiShoppingCart className="text-lg hover:text-accent cursor-pointer" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar2;
