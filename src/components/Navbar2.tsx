"use client"; // To ensure it's a client-side component

import { useState } from "react";
import Link from "next/link";
import { FiShoppingCart, FiUser, FiSearch, FiHeart } from "react-icons/fi";
import CartSidebar from "@/components/CartSidebar"; // Adjust the import path if needed

const Navbar2 = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

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
          <Link href="/my-account" className="text-2xl hover:text-accent cursor-pointer flex items-center">
            <FiUser className="mr-2" />
          </Link>
          <Link href="/wishlist" className="text-2xl hover:text-accent cursor-pointer flex items-center">
            <FiHeart className="mr-2" />
          </Link>
          <Link href="/search" className="text-2xl hover:text-accent cursor-pointer flex items-center">
            <FiSearch className="mr-2" />
          </Link>
          {/* Cart Icon */}
          <Link href="/cart">
          <FiShoppingCart className="text-lg hover:text-accent cursor-pointer" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsCartOpen(!isCartOpen)}
        >
          ☰
        </button>
      </div>

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={[]} // Replace with actual cart items
        onRemoveItem={(id) => console.log("Remove item:", id)} // Add your remove logic
      />
    </header>
  );
};

export default Navbar2;
