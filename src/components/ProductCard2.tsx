"use client"
import React from "react";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
}

const ProductCard2: React.FC<ProductCardProps> = ({ title, price, image }) => {
  return (
    <div className="relative border p-4 rounded-md shadow-lg group overflow-hidden">
      {/* Product Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-auto rounded-md transition-transform duration-300 group-hover:scale-105"
      />
      {/* Product Details */}
      <div className="mt-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-500">{price}</p>
      </div>
      {/* Add to Cart Button */}
      <Link
         href="/cart1"
        className="absolute bottom-0 left-0 w-full bg-black text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        Add to Cart
         </Link>
    </div>
  );
};

export default ProductCard2;
