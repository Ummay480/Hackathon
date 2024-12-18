"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

interface HeroBannerProps {
  title: string;
 
}

const HeroBanner: React.FC<HeroBannerProps> = ({ title }) => (
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
      <h1 className="text-4xl font-bold text-gray-800 mt-6">{title}</h1>
      <p className="text-gray-800 text-2xl font-semibold mt-6 flex items-center justify-center gap-2">
      <Link href="/">Home</Link>
        <IoIosArrowForward />
        <span>{title}</span>
      </p>
    </div>
  </section>
);

export default HeroBanner;
