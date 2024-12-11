"use client"; // Add this to ensure it's a client component

import { useState } from "react";
import Link from "next/link";
import { FiShoppingCart, FiUser, FiSearch, FiHeart } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white text-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto py-4 flex items-center justify-between px-20 text-xl">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-accent">
        Luxe-Living
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
        <div className="hidden md:flex items-center space-x-6">
          <FiUser className="text-2xl hover:text-accent cursor-pointer" />
          <FiHeart className="text-2xl hover:text-accent cursor-pointer" />
          <FiSearch className="text-2xl hover:text-accent cursor-pointer" />
          <FiShoppingCart className="text-2xl hover:text-accent cursor-pointer" />
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

export default Navbar;