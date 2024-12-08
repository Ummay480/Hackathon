"use client"
import React from "react";

const ProductGallery = () => {
    return (
      <div className="flex flex-col items-center lg:w-1/2">
        <img
          src="/path/to/sofa.png"
          alt="Asgaard Sofa"
          className="w-full h-auto rounded-lg"
        />
        <div className="flex gap-2 mt-4">
          {[1, 2, 3, 4].map((_, index) => (
            <img
              key={index}
              src={`/path/to/sofa-thumbnail-${index + 1}.png`}
              alt={`Thumbnail ${index + 1}`}
              className="w-16 h-16 object-cover rounded-lg border border-gray-200"
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default ProductGallery;
  