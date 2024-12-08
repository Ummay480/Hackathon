"use client"

import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="bg-amber-100 py-20 px-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between mx-20">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold text-accent">
            Rocket Single Seater
          </h1>
          <p className="mt-4 text-gray-700">
            Comfortable and stylish chairs for your home.
          </p>
          <button className="mt-6 px-6 py-3 bg-accent text-black rounded-lg hover:bg-gray-100">
            Shop Now
          </button>
        </div>
        <div className="mt-8 lg:mt-0">
          <Image
            src="/images/image-20.png" // Replace with your actual image path
            alt="Rocket Single Seater"
            width={800}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
