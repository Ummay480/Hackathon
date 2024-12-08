import React from 'react';
import Image from 'next/image';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  return (
    <aside className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform`}>
      <div className="p-4">
        <h3 className="text-lg font-medium mb-4">Shopping Cart</h3>
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={onClose}>✕</button>
        {/* Cart Item */}
        <div className="flex items-center gap-4 mb-4">
          <Image
            src="/path/to/product-image.jpg"
            alt="Cart Item"
            className="w-16 h-16 rounded-md"
            width={64} // width in pixels
            height={64} // height in pixels
          />
          <div>
            <p className="text-sm font-medium">Asgaard Sofa</p>
            <p className="text-sm text-gray-500">1 x Rs. 250,000.00</p>
          </div>
          <button className="ml-auto text-gray-500 hover:text-red-500">✕</button>
        </div>
        <hr />
        {/* Subtotal */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm font-medium">Subtotal</span>
          <span className="text-sm">Rs. 250,000.00</span>
        </div>
        {/* Actions */}
        <div className="mt-6 flex flex-col gap-4">
          <button className="px-4 py-2 bg-black text-white rounded-md">View Cart</button>
          <button className="px-4 py-2 bg-gray-100 text-black rounded-md">Checkout</button>
        </div>
      </div>
    </aside>
  );
};

export default CartSidebar;
