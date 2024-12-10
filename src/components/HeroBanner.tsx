"use client";
import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

const HeroBanner = () => (
  <section
    className="relative bg-gray-100 h-[400px] flex items-center justify-center"
    style={{
      backgroundImage: "url('/images/header.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 mt-10">
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={120}
        height={120}
        className="mx-auto"
      />
    </div>

    <div className="text-center mt-8">
  <h1 className="text-7xl font-bold text-gray-800 mt-6">Shop</h1>
  <p className="text-gray-800 text-2xl font-semibold mt-6 flex items-center justify-center gap-2">
    <span>Home</span>
    <IoIosArrowForward />
    <span>Shop</span>
  </p>
</div>
  </section>
);

export default HeroBanner;
