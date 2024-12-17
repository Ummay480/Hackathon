"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ProductProps {
  title: string;
  price: string;
  image: string;
  width?: number;
  height?: number;
  onAddToCart?: () => void; // Add this prop
}

const ProductCard2: React.FC<ProductProps> = ({
  title,
  price,
  image,
  width = 200,
  height = 200,
  onAddToCart,
}) => {
  return (
    <div className="product-card p-4 border border-gray-200 rounded-lg shadow-md">
      {/* Product Image */}
      <Image
        src={image}
        alt={title}
        width={width}
        height={height}
        className="object-cover rounded-lg"
      />

      {/* Product Details */}
      <div className="mt-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-500">{price}</p>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={onAddToCart}
        className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard2;
