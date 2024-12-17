"use client";

import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar2";
import ResultsFilter from "@/components/ResultsFilter";
import Promises from "@/components/Promises";
import ProductList from "@/components/ProductList"; // Import the new ProductList component

const Shop: React.FC = () => {
  const totalProducts = 100; // Assuming you have the total number of products

  return (
    <div>
      <Navbar />
      <HeroBanner title="Shop" />
      <ResultsFilter
        currentPage={1}
        itemsPerPage1={16}
        itemsPerPage2={8}
        itemsPerPage3={8}
        totalResults={totalProducts}
      />
      <section className="max-full mx-auto px-4 py-0">
        <ProductList /> {/* Render the product list here */}
        <div className="w-full mx-auto px-2 py-0 left-0 right-0 -ml-6">
          <Promises />
        </div>
      </section>
    </div>
  );
};

export default Shop;
