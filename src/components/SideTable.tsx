"use client";
import React from "react";
import ProductCard from "./ProductCard";

const SideTables: React.FC = () => {
  return (
    <div className="min-h-screen bg-red-50 flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
        <ProductCard title="Side table" imageSrc="/images/image-3.png" />
        <ProductCard title="Side table" imageSrc="/images/image-17.png" />
      </div>
    </div>
  );
};

export default SideTables;
