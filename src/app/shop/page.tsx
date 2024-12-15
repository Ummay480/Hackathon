"use client";
import React, { useState } from "react";
import HeroBanner from "@/components/HeroBanner";
import ProductCard2 from "@/components/ProductCard2";
import Navbar from "@/components/Navbar2";
import ResultsFilter from "@/components/ResultsFilter";
import Pagination from "@/components/Pagination";
import Promises from "@/components/Promises";

interface Product {
  title: string;
  price: string;
  image: string;
}

const products: Product[] = [
  { title: "Trenton modular sofa", price: "Rs. 25,000.00", image: "/images/image-7.png" },
  { title: "Granite dining table", price: "Rs. 25,000.00", image: "/images/image-2.png" },
  { title: "Outdoor bar table", price: "Rs. 25,000.00", image: "/images/image-9.png" },
  { title: "Plain console with teak mirror", price: "Rs. 25,000.00", image: "/images/image-8.png" },
  { title: "Grain coffee table", price: "Rs. 15,000.00", image: "/images/image-6.png" },
  { title: "Kent coffee table", price: "Rs. 225,000.00", image: "/images/image-5.png" },
  { title: "Round coffee table", price: "Rs. 251,000.00", image: "/images/image-4.png" },
  { title: "Reclaimed teak coffee table", price: "Rs. 25,200.00", image: "/images/image-22.png" },
  { title: "Plain console", price: "Rs. 258,200.00", image: "/images/image-21.png" },
  { title: "Reclaimed teak Sideboard", price: "Rs. 20,000.00", image: "/images/image-3.png" },
  { title: "Bella chair and table", price: "Rs. 100,000.00", image: "/images/image-18.png" },
  { title: "Trenton modular sofa", price: "Rs. 25,000.00", image: "/images/image-7.png" },
  { title: "Granite dining table", price: "Rs. 25,000.00", image: "/images/image-2.png" },
  { title: "Outdoor bar table", price: "Rs. 25,000.00", image: "/images/image-9.png" },
  { title: "Plain console with teak mirror", price: "Rs. 25,000.00", image: "/images/image-8.png" },
  { title: "Grain coffee table", price: "Rs. 15,000.00", image: "/images/image-6.png" },
  { title: "Kent coffee table", price: "Rs. 225,000.00", image: "/images/image-5.png" },
  { title: "Round coffee table", price: "Rs. 251,000.00", image: "/images/image-4.png" },
  { title: "Reclaimed teak coffee table", price: "Rs. 25,200.00", image: "/images/image-22.png" },
  { title: "Plain console", price: "Rs. 258,200.00", image: "/images/image-21.png" },
  { title: "Reclaimed teak Sideboard", price: "Rs. 20,000.00", image: "/images/image-3.png" },
  { title: "Bella chair and table", price: "Rs. 100,000.00", image: "/images/image-18.png" },
  { title: "Trenton modular sofa", price: "Rs. 25,000.00", image: "/images/image-7.png" },
  { title: "Granite dining table", price: "Rs. 25,000.00", image: "/images/image-2.png" },
  { title: "Outdoor bar table", price: "Rs. 25,000.00", image: "/images/image-9.png" },
  { title: "Plain console with teak mirror", price: "Rs. 25,000.00", image: "/images/image-8.png" },
  { title: "Grain coffee table", price: "Rs. 15,000.00", image: "/images/image-6.png" },
  { title: "Kent coffee table", price: "Rs. 225,000.00", image: "/images/image-5.png" },
  { title: "Round coffee table", price: "Rs. 251,000.00", image: "/images/image-4.png" },
  { title: "Reclaimed teak coffee table", price: "Rs. 25,200.00", image: "/images/image-22.png" },
  { title: "Plain console", price: "Rs. 258,200.00", image: "/images/image-21.png" },
  { title: "Reclaimed teak Sideboard", price: "Rs. 20,000.00", image: "/images/image-3.png" },
  
];

const Shop: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8; // Adjust to set products per page
  const totalResults = products.length;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Navbar />
      <HeroBanner title="Shop" />
      <ResultsFilter
        currentPage={currentPage}
        itemsPerPage1={itemsPerPage}
        itemsPerPage2={itemsPerPage}
        itemsPerPage3={itemsPerPage}
        totalResults={totalResults}
      />
      <section className="max-w-7xl mx-auto px-4 py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((product, index) => (
              <ProductCard2 key={index} {...product} />
            ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(totalResults / itemsPerPage)}
          onPageChange={handlePageChange}
        />
        <div className="w-full mx-auto px-2 py-0 left-0 right-0">
          <Promises />
        </div>
      </section>
    </div>
  );
};

export default Shop;
