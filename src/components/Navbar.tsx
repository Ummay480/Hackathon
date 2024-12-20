"use client"; // Add this to ensure it's a client component

import { useState } from "react";
import Link from "next/link";
import { FiShoppingCart, FiUser, FiSearch, FiHeart } from "react-icons/fi";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <header className="bg-amber-100 text-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto py-0 flex items-center justify-between px-20">
       {/* Logo */}
<Link href="/" className="text-mlg sm:text-sm font-normal text-accent text-yellow-600">
  <Image
    src="/images/logo.png"
    alt="Logo"
    width={60} // Adjust for smaller devices
    height={60} // Adjust for smaller devices
    className="mx-auto sm:w-20 sm:h-20 unerline" // Apply small size for small screens
  />
  <div className="border-t-2 border-yellow-600 w-20 mx-auto -mt-5"></div>
  <div className="py-3 sm:-mt-3 text-md sm:tex-sm text-center">MEUBLE HOUSE</div>
</Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-8 text-xl">
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
          <FiUser className="text-2xl hover:text-accent cursor-pointer" />
          </Link>
          <Link href="/wishlist">
          <FiHeart className="text-2xl hover:text-accent cursor-pointer" />
          </Link>
         {/* Search Block */}
        <div className="relative">
          <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <FiSearch className="text-2xl" />
          </button>

          {/* Conditional Search Input */}
          {isSearchOpen && (
            <div className="absolute top-full mt-2 bg-white text-black">
              <input
                type="text"
                placeholder="Search..."
                className="px-1 py-1 rounded border-2 focus:outline-1"
                onBlur={() => setIsSearchOpen(false)} // Close input when focus is lost
              />
            </div>
          )}
 </div>
          <Link href="/cart">
          <FiShoppingCart className="text-2xl hover:text-accent cursor-pointer" />
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

export default Navbar;
