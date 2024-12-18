"use client";

import React, { useState } from "react";
import ProductDetails from "@/components/CartProductDetails";
import RelatedProducts from "@/components/RelatedProducts";
import CartSidebar from "@/components/CartSidebar";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string; // Optional image field
}

const Product1Page: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Add item to the cart
  const handleAddToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);

      if (existingItem) {
        // Update quantity if item already exists
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      // Add new item
      return [...prevItems, item];
    });
  };

  // Remove item from the cart
  const handleRemoveItem = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-gray-50">
      {/* Main Content */}
      <main className="container mx-auto px-4 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Product Details */}
          <ProductDetails
            onCartOpen={() => setIsCartOpen(true)}
            onAddToCart={handleAddToCart}
          />
        </div>
      </main>

      {/* Related Products */}
      <RelatedProducts />

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

export default Product1Page;
