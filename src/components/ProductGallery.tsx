"use client";
import React from "react";
import Image from "next/image";

const ProductGallery = () => {
  return (
    <div className="flex flex-col items-center lg:w-1/2">
      {/* Main Image */}
      <Image
        src="/path/to/sofa.png"
        alt="Asgaard Sofa"
        className="w-full h-auto rounded-lg"
        width={800}  // Set the appropriate width
        height={600} // Set the appropriate height
        layout="intrinsic"  // Optional: Adjust layout if necessary
      />
      
      {/* Thumbnail Images */}
      <div className="flex gap-2 mt-4">
        {[1, 2, 3, 4].map((_, index) => (
          <Image
            key={index}
            src={`/path/to/sofa-thumbnail-${index + 1}.png`}
            alt={`Thumbnail ${index + 1}`}
            className="w-16 h-16 object-cover rounded-lg border border-gray-200"
            width={64}   // Set width for thumbnail
            height={64}  // Set height for thumbnail
            layout="intrinsic"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
