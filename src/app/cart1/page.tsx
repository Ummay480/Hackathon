"use client"
import React, { useState } from "react";
import CartSidebar from "@/components/CartSidebar";

const cart1 = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Asgaard Sofa",
      price: 250000,
      quantity: 1,
      image: "/images/image-18.png",
    },
    {
      id: 2,
      name: "Modern Chair",
      price: 50000,
      quantity: 2,
      image: "/images/image-10.png",
    },
  ]);

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <button onClick={() => setIsCartOpen(true)}>Open Cart</button>
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
      />
    </>
  );
};

export default cart1;
