"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="w-full h-screen md:h-[800px] sm:h-[600px] bg-amber-100 py-4 px-10 sm:px-2 md:px-4">
      <div className="max-w-7xl flex flex-col lg:flex-row items-center justify-between mx-20">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold text-accent">
            Rocket Single Seater
          </h1>
          <p className="mt-4 text-gray-700">
            Comfortable and stylish chairs for your home.
          </p>
          <div className="mt-10">
        <Link
          href="/shop"
          className="inline-block px-6 py-2 underline border-gray-800 text-gray-800 text-2xl font-bold rounded hover:bg-gray-800 hover:text-white transition"
        >
          Shop Now
        </Link>
        </div>
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
