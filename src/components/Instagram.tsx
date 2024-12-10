"use client";
import React from "react";
import Link from "next/link";

const Instagram = () => (
  <section
    className="relative bg-pink-100 h-[400px] flex items-center justify-center opecity-50"
    style={{
      backgroundImage: "url('/images/hero.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute top-32 items-center justify-center text-black">
      <h2 className="text-5xl font-bold">Our Instagram</h2>

      <p className="text-sm mt-2 text-center ">Follow our store on Instagram</p>      
    </div>

    <div className= "mt-10">
        <Link
          href="/twitter"
          className="inline-block px-12 py-2 mt-6 border border-none text-gray-800 text-md font-normal rounded-full bg-white hover:bg-gray-800 hover:text-white transition"
        >
         Follow Us
        </Link>
        </div>
     </section>
);

export default Instagram;
