"use client";

import React from "react";
import Image from "next/image";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string; // Optional image field
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveItem: (id: string) => void;
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
    >
      <div className="p-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
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
                {/* Display Image if Available */}
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-md"
                  />
                )}
                <div className="flex-grow ml-4">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-500">${item.price.toFixed(2)}</p>
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
