"use client"
import React from "react";

type ProductProps = {
  title: string;
  price: string;
  image: string;
};

const ProductCard = ({ title, price, image }: ProductProps) => (
  <div className="border-none rounded-md shadow-sm p-4">
    <img src={image} alt={title} className="w-full h-48 object-cover rounded" />
    <h3 className="mt-4 text-lg font-medium">{title}</h3>
    <p className="text-gray-600">{price}</p>
  </div>
);

export default ProductCard;
