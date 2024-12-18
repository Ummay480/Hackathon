"use client";

import React from "react";
import Image from "next/image";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveItem: (id: number) => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({
  isOpen,
  onClose,
  cartItems,
  onRemoveItem,
}) => {
  return (
    <aside
      className={`fixed right-0 top-0 h-full bg-white shadow-lg z-50 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 min-w-[300px] max-w-[400px]`}
      aria-hidden={!isOpen}
    >
      <div className="p-4 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
          aria-label="Close Cart"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between border-b py-4"
              >
                <Image
                  src={item.image || "/images/fallback.jpg"} // Fallback image
                  alt={item.name}
                  className="w-16 h-16 rounded-md"
                  width={64}
                  height={64}
                />
                <div className="flex-grow ml-4">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-500">
                    ${item.price.toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
};

export default CartSidebar;
