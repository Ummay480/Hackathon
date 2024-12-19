"use client";

import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar2";
import ResultsFilter from "@/components/ResultsFilter";
import Promises from "@/components/Promises";
import ProductList from "@/components/ProductList";
import Pagination from "@/components/Pagination";
import { useState } from "react";

// Product List
const products = [
  // Add a total of at least 32 products
  { title: "Product 1", price: "$ 25,000", image: "/images/image-7.png" },
  { title: "Product 2", price: "$ 25,000", image: "/images/image-2.png" },
   { title: "Outdoor bar table", price: "$ 25,000.00", image: "/images/image-9.png" },
  { title: "Plain console with teak mirror", price: "$ 25,000.00", image: "/images/image-8.png" },
  { title: "Grain coffee table", price: "$ 15,000.00", image: "/images/image-6.png" },
  { title: "Kent coffee table", price: "$ 225,000.00", image: "/images/image-5.png" },
  { title: "Round coffee table", price: "$ 251,000.00", image: "/images/image-4.png" },
  { title: "Reclaimed teak coffee table", price: "$ 25,200.00", image: "/images/image-22.png" },
  { title: "Plain console", price: "$ 258,200.00", image: "/images/image-21.png" },
  { title: "Reclaimed teak Sideboard", price: "$ 20,000.00", image: "/images/image-3.png" },
  { title: "Bella chair and table", price: "$ 100,000.00", image: "/images/image-18.png" },
  { title: "Product 1", price: "$ 25,000", image: "/images/image-1.png" },
  { title: "Product 2", price: "$ 25,000", image: "/images/image-2.png" },
   { title: "Outdoor bar table", price: "$ 25,000.00", image: "/images/image-9.png" },
  { title: "Plain console with teak mirror", price: "$ 25,000.00", image: "/images/image-8.png" },
  { title: "Grain coffee table", price: "$ 15,000.00", image: "/images/image-6.png" },
  { title: "Kent coffee table", price: "$ 225,000.00", image: "/images/image-5.png" },
  { title: "Round coffee table", price: "$ 251,000.00", image: "/images/image-4.png" },
  { title: "Reclaimed teak coffee table", price: "$ 25,200.00", image: "/images/image-22.png" },
  { title: "Product 1", price: "$ 25,000", image: "/images/image-7.png" },
  { title: "Product 2", price: "$ 25,000", image: "/images/image-2.png" },
   { title: "Outdoor bar table", price: "$ 25,000.00", image: "/images/image-9.png" },
  { title: "Plain console with teak mirror", price: "$ 25,000.00", image: "/images/image-8.png" },
  { title: "Grain coffee table", price: "$ 15,000.00", image: "/images/image-6.png" },
  { title: "Kent coffee table", price: "$ 225,000.00", image: "/images/image-5.png" },
  { title: "Round coffee table", price: "$ 251,000.00", image: "/images/image-4.png" },
  { title: "Reclaimed teak coffee table", price: "$ 25,200.00", image: "/images/image-22.png" },
  { title: "Kent coffee table", price: "$ 225,000.00", image: "/images/image-5.png" },
  { title: "Round coffee table", price: "$ 251,000.00", image: "/images/image-4.png" },
  { title: "Reclaimed teak coffee table", price: "$ 25,200.00", image: "/images/image-22.png" },
  { title: "Plain console", price: "$ 258,200.00", image: "/images/image-21.png" },
  { title: "Reclaimed teak Sideboard", price: "$ 20,000.00", image: "/images/image-3.png" },

];

const Shop: React.FC = () => {
  // State for current page
  const [currentPage, setCurrentPage] = useState(1);

  // Define the items per page for each page
  const itemsPerPage = [16, 8, 8];

  // Function to handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Calculate the index range of products for the current page
  const startIndex = itemsPerPage.slice(0, currentPage - 1).reduce((acc, val) => acc + val, 0);
  const endIndex = startIndex + itemsPerPage[currentPage - 1];
  const currentProducts = products.slice(startIndex, endIndex);

  // Function to handle adding a product to the cart
  const handleAddToCart = (product: Product) => {
    console.log("Product added to cart:", product);
    // Implement cart logic here
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Banner */}
      <HeroBanner title="Shop" />

      {/* Results Filter */}
      <ResultsFilter
        currentPage={currentPage}
        itemsPerPage1={itemsPerPage[0]}
        itemsPerPage2={itemsPerPage[1]}
        itemsPerPage3={itemsPerPage[2]}
        totalResults={products.length}
      />

      {/* Main Content Section */}
      <section className="max-w-screen-xl mx-auto px-4 py-8">
        {/* Product List */}
        <ProductList products={products} />;

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={itemsPerPage.length}
          onPageChange={handlePageChange}
        />

        {/* Promises Section */}
        <div className="w-full px-2 py-4">
          <Promises />
        </div>
      </section>
    </div>
  );
};

export default Shop;


