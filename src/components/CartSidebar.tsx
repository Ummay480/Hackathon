"use client"
import React from "react";

// Define the CartItem type
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

// Define the props for CartSidebar
interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveItem: (id: string) => void;
}

// CartSidebar component
const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, cartItems, onRemoveItem }) => {
  return (
    <aside
      className={`fixed right-0 top-0 w-80 bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform`}
    >
      <div className="p-4">
        <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
          Close
        </button>
        <h2 className="text-xl font-bold">Cart</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center border-b py-2">
              <div>
                <p>{item.name}</p>
                <p>${item.price.toFixed(2)}</p>
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
      </div>
    </aside>
  );
};

export default CartSidebar;
