"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface ResultsFilterProps {
  currentPage: number;
  itemsPerPage1: number;
  itemsPerPage2: number;
  itemsPerPage3: number;
  totalResults: number;
}

const ResultsFilter: React.FC<ResultsFilterProps> = ({
  currentPage,
  totalResults,
}) => {
  const [showCount, setShowCount] = useState(16);

  useEffect(() => {
    if (currentPage === 1) {
      setShowCount(16);
    } else if (currentPage === 2) {
      setShowCount(24);
    } else if (currentPage === 3) {
      setShowCount(32);
    }
  }, [currentPage]);

  let startResult = 1;
  let endResult = 0;

  if (currentPage === 1) {
    startResult = 1;
    endResult = Math.min(16, totalResults);
  } else if (currentPage === 2) {
    startResult = 17;
    endResult = Math.min(24, totalResults);
  } else if (currentPage === 3) {
    startResult = 25;
    endResult = Math.min(32, totalResults);
  }

  return (
    <div className="flex items-center justify-between bg-pink-50 p-4 px-24 my-10 rounded-md">
      {/* Left Section: Filter and View Options */}
      <div className="flex items-center gap-4">
        <Image
          src="/images/image-23.png"
          alt="Icon"
          width={24}
          height={20}
          className="object-contain"
        />

        <button className="flex items-center gap-0 text-gray-700 text-md">
          Filter
        </button>

        <div className="flex gap-2 text-gray-500 text-sm font-normal">
          <button className="w-6 h-4 flex items-center justify-center">
            <Image
              src="/images/image-24.png"
              alt="Grid View"
              width={24}
              height={24}
              className="object-contain ml-2"
            />
          </button>
          <button className="w-6 h-4 flex items-center justify-center">
            <Image
              src="/images/image-25.png"
              alt="List View"
              width={24}
              height={20}
              className="object-contain ml-6"
            />
          </button>
        </div>
      </div>

      {/* Vertical Line Divider */}
      <div className="h-8 w-px bg-gray-300 text-sm -ml-80"></div>

      {/* Center Section: Showing Results */}
      <p className="text-gray-600 text-sm justify-start items-start -ml-80">
        Showing {startResult}–{endResult} of {totalResults} results
      </p>

      {/* Right Section: Show Count and Sort By */}
      <div className="flex items-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <label className="text-gray-600">Show</label>
          <input
            type="number"
            value={showCount}
            className="w-12 p-1 text-center text-gray-400 border-none focus:outline-none focus:ring-2 focus:ring-pink-400"
            readOnly
          />
        </div>

        <div className="flex items-center gap-2">
          <label className="text-gray-600">Sort by</label>
          <select
            className="p-1 border-none focus:outline-none text-gray-400 focus:ring-2 focus:ring-pink-400"
          >
            <option value="Default">Default</option>
            <option value="Price">Price</option>
            <option value="Popularity">Popularity</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ResultsFilter;
