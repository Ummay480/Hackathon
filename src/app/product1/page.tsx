"use client";
import React, { useState } from "react";
import CartHeader from "@/components/CartHeader";
import ProductDetails from "@/components/CartProductDetails";
import RelatedProducts from "@/components/RelatedProducts";
import CartSidebar from "@/components/CartSidebar";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const Product1Page: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (item: CartItem) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <CartHeader />

      {/* Main Content */}
      <main className="container mx-auto px-4 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Product Details */}
          <ProductDetails onCartOpen={() => setIsCartOpen(true)} onAddToCart={handleAddToCart} />
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
