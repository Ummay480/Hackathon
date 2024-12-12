"use client";
import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai"; // Import the Twitter circle icon

const SocialMedia: React.FC = () => {
  return (
    <div className="mt-8 gap-4 w-[690px] ">
      <h3 className="font-medium text-gray-400">
        SKU <span className="ml-10 mr-4">:</span> ssoo1
      </h3>
      <h3 className="mt-3 font-medium text-gray-400">
        Category<span className="ml-2 mr-4">:</span> Sofas
      </h3>
      <h3 className="mt-3 font-medium text-gray-400">
        Tags <span className=" mt-4 ml-10 mr-4">:</span> Sofas, Chair, Home, Shop
      </h3>
      <h3 className="mt-3 font-medium text-gray-400 flex items-center gap-4">
        Share <span className=" ml-5 mr-1">:</span>
        {/* Icons with black color */}
        <FaFacebook className="text-black text-2xl ml-2" />
        <AiFillTwitterCircle className="text-black text-2xl ml-2" />
        <FaLinkedin className="text-black text-2xl ml-2" />
      </h3>
    </div>
  );
};

export default SocialMedia;
