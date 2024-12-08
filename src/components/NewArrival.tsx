"use client"; // Add this if client-side logic is needed (optional in this case)

import React from 'react';
import Image from 'next/image';

const NewArrival: React.FC = () => {
  return (
    <section className="bg-amber-50 h-screen flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-16 px-4">
        {/* Image Section */}
        <div className="flex-1">
          <Image
            src="/images/image18.png" 
            alt="Asgaard Sofa"
            width={500} // Set width
            height={500} // Set height
            className="max-w-full"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center md:text-left mt-8 md:mt-0">
          <p className="text-gray-700 text-lg">New Arrivals</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Asgaard Sofa
          </h1>
          <button className="mt-6 px-6 py-2 border border-gray-800 text-gray-800 font-medium rounded hover:bg-gray-800 hover:text-white transition">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
