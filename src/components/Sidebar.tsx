"use client"

import Image from 'next/image';
import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-full lg:w-1/4">
      {/* Search */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-300"
        />
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h4 className="text-lg font-medium text-gray-800 mb-4">Categories</h4>
        <ul className="space-y-2 text-gray-600">
          <li>Crafts (2)</li>
          <li>Design (8)</li>
          <li>Handmade (7)</li>
          <li>Interior (1)</li>
          <li>Wood (4)</li>
        </ul>
      </div>

      {/* Recent Posts */}
      <div>
        <h4 className="text-lg font-medium text-gray-800 mb-4">Recent Posts</h4>
        <ul className="space-y-4">
          <li className="flex items-center gap-4">
            <Image
              src="/path/to/recent1.jpg"
              alt="Recent Post"
              className="w-16 h-16 object-cover rounded-lg"
              width={64}  // Specify width
              height={64} // Specify height
              layout="intrinsic" // Optional: Makes the image scale correctly
            />
            <div>
              <p className="text-gray-800">Going all-in with millennial design</p>
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
