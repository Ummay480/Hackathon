"use client"
import React from "react";
import Image from "next/image";

const ProductSection = () => {
  const products = Array.from({ length: 4 });

  return (
    <div className="bg-secondary py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-accent text-center mb-8">
          Top Picks For You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((_, index) => (
            <div key={index} className="text-center">
              <Image
                src="/images/image-10.png" // Replace with your actual image path
                alt="Product"
                width={200}
                height={200}
                className="mx-auto"
              />
              <Image
                src="/images/image-11.png" // Replace with your actual image path
                alt="Product"
                width={200}
                height={200}
                className="mx-auto"
              />
              <Image
                src="/images/image-9.png" // Replace with your actual image path
                alt="Product"
                width={200}
                height={200}
                className="mx-auto"
              />
              <Image
                src="/images/image-8.png" // Replace with your actual image path
                alt="Product"
                width={200}
                height={200}
                className="mx-auto"
              />
              <h3 className="text-lg font-semibold text-accent mt-4">
                Product Name
              </h3>
              <p className="text-gray-500 mt-2">Rs. 25,000.00</p>
              <button className="mt-4 px-4 py-2 bg-accent text-white rounded hover:bg-gray-800">
                View More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
