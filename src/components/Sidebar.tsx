"use client"

import Image from 'next/image';
import React from 'react';
import { IoSearch } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="w-full lg:w-1/4">
     <div className="relative mb-8">
  {/* Search Icon */}
  <IoSearch className="absolute top-3 right-3 text-blac text-2xl"/>
  {/* Search Input */}
  <input
    type="text"
      className="w-full pl-4 pr-4 py-2 border-2 rounded-lg focus:outline-none border-gray-400"
  />
</div>
    

      {/* Categories */}
      <div className="mb-8">
  <h4 className="text-xl font-semi-bold text-black my-4 px-6">Categories</h4>
  <ul className="grid col-2 gap-6 text-gray-400 px-6 mb-20">
    <li className="flex justify-between ">
      <span>Crafts</span>
      <span>2</span>
    </li>
    <li className="flex justify-between">
      <span>Design</span>
      <span>8</span>
    </li>
    <li className="flex justify-between">
      <span>Handmade</span>
      <span>7</span>
    </li>
    <li className="flex justify-between">
      <span>Interior</span>
      <span>1</span>
    </li>
    <li className="flex justify-between">
      <span>Wood</span>
      <span>4</span>
    </li>
  </ul>
</div>


      {/* Recent Posts */}
      <div className="grid col-2 px-4 mb-20 justify-between gap-4">
  <h4 className="text-md font-medium text-gray-800 mb-4">Recent Posts</h4>
  <ul className="space-y-6"> {/* Adds spacing between list items */}
    <li className="flex items-start gap-6"> {/* Adds gap between image and text */}
      <Image
        src="/images/image-39.png"
        alt="Recent Post"
        className="w-16 h-16 object-cover rounded-lg"
        width={80}
        height={80}
        layout="intrinsic"
      />
      <div>
        <p className="text-gray-800">Going all-in with millennial design</p>
        <span className="text-sm text-gray-500">03 Aug 2022</span>
      </div>
    </li>
    <li className="flex items-start gap-6">
      <Image
        src="/images/image-37.png"
        alt="Recent Post"
        className="w-16 h-16 object-cover rounded-lg"
        width={80}
        height={80}
        layout="intrinsic"
      />
      <div>
        <p className="text-gray-800">Exploring new ways of decorating</p>
        <span className="text-sm text-gray-500">03 Aug 2022</span>
      </div>
    </li>
    <li className="flex items-start gap-6">
      <Image
        src="/images/image-38.png"
        alt="Recent Post"
        className="w-16 h-16 object-cover rounded-lg"
        width={80}
        height={80}
        layout="intrinsic"
      />
      <div>
        <p className="text-gray-800">Handmade pieces that took time to make</p>
        <span className="text-sm text-gray-500">03 Aug 2022</span>
      </div>
    </li>
    <li className="flex items-start gap-6">
      <Image
        src="/images/image-36.png"
        alt="Recent Post"
        className="w-16 h-16 object-cover rounded-lg"
        width={80}
        height={80}
        layout="intrinsic"
      />
      <div>
        <p className="text-gray-800">Modern home in Milan</p>
        <span className="text-sm text-gray-500">03 Aug 2022</span>
      </div>
    </li>
    <li className="flex items-start gap-6">
      <Image
        src="/images/image-35.png"
        alt="Recent Post"
        className="w-16 h-16 object-cover rounded-lg"
        width={80}
        height={80}
        layout="intrinsic"
      />
      <div>
        <p className="text-gray-800">Colorful office redesign</p>
        <span className="text-sm text-gray-500">03 Aug 2022</span>
      </div>
    </li>
          {/* Add more recent posts */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
