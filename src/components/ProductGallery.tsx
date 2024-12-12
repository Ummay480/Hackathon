"use client";
import React from "react";
import Image from "next/image";

const ProductGallery: React.FC = () => {
  return (
    
      <div className="flex flex-col lg:flex-row gap-6 mt-4 mb-40 ml-4">
        {/* Thumbnail Images */}
        <div className="flex flex-col gap-4 items-start lg:w-1/5">
          {["image-28.png", "image-29.png", "image-30.png", "image-31.png"].map((image, index) => (
            <Image
              key={index}
              src={`/images/${image}`}
              alt={`Thumbnail ${index + 1}`}
              className="w-16 h-16 object-cover rounded-lg border border-gray-200"
              width={64}
              height={64}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="flex justify-center items-center lg:w-4/5 bg-amber-50 -ml-10">
          <Image
            src="/images/image18.png"
            alt="Asgaard Sofa"
            className="w-full h-auto rounded-lg py-10"
            width={1000} // Increased width for the main image
            height={1400} // Adjusted height for the main image
            priority
          />
        </div>
      </div>
   
  );
};

export default ProductGallery;
