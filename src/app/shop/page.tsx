"use client";
import React, { useState } from 'react';
import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar2";
import ResultsFilter from "@/components/ResultsFilter";
import Promises from "@/components/Promises";
import ProductList from "@/components/ProductList"; // Import the new ProductList component


// Define the Product type
interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
}

const Shop: React.FC = () => {
  // Removing unused totalProducts, setCurrentPage, setItemsPerPage, setProducts
  const [products,] = useState<Product[]>([
    { id: 1, title: "Product 1", price: "$20", image: "/images/product1.jpg" },
    { id: 2, title: "Product 2", price: "$30", image: "/images/product2.jpg" },
    { id: 3, title: "Product 3", price: "$40", image: "/images/product3.jpg" },
    { id: 4, title: "Product 4", price: "$25", image: "/images/product4.jpg" },
    { id: 5, title: "Product 5", price: "$35", image: "/images/product5.jpg" },
    { id: 6, title: "Product 6", price: "$50", image: "/images/product6.jpg" },
    { id: 1, title: "Product 1", price: "$20", image: "/images/product1.jpg" },
    { id: 2, title: "Product 2", price: "$30", image: "/images/product2.jpg" },
    { id: 3, title: "Product 3", price: "$40", image: "/images/product3.jpg" },
    { id: 4, title: "Product 4", price: "$25", image: "/images/product4.jpg" },
    { id: 5, title: "Product 5", price: "$35", image: "/images/product5.jpg" },
    { id: 6, title: "Product 6", price: "$50", image: "/images/product6.jpg" },
    { id: 1, title: "Product 1", price: "$20", image: "/images/product1.jpg" },
    { id: 2, title: "Product 2", price: "$30", image: "/images/product2.jpg" },
    { id: 3, title: "Product 3", price: "$40", image: "/images/product3.jpg" },
    { id: 4, title: "Product 4", price: "$25", image: "/images/product4.jpg" },
    { id: 5, title: "Product 5", price: "$35", image: "/images/product5.jpg" },
    { id: 6, title: "Product 6", price: "$50", image: "/images/product6.jpg" },
    { id: 1, title: "Product 1", price: "$20", image: "/images/product1.jpg" },
    { id: 2, title: "Product 2", price: "$30", image: "/images/product2.jpg" },
    { id: 3, title: "Product 3", price: "$40", image: "/images/product3.jpg" },
    { id: 4, title: "Product 4", price: "$25", image: "/images/product4.jpg" },
    { id: 5, title: "Product 5", price: "$35", image: "/images/product5.jpg" },
    { id: 6, title: "Product 6", price: "$50", image: "/images/product6.jpg" },
    { id: 1, title: "Product 1", price: "$20", image: "/images/product1.jpg" },
    { id: 2, title: "Product 2", price: "$30", image: "/images/product2.jpg" },
    { id: 3, title: "Product 3", price: "$40", image: "/images/product3.jpg" },
    { id: 4, title: "Product 4", price: "$25", image: "/images/product4.jpg" },
    { id: 5, title: "Product 5", price: "$35", image: "/images/product5.jpg" },
    { id: 6, title: "Product 6", price: "$50", image: "/images/product6.jpg" },
    { id: 1, title: "Product 1", price: "$20", image: "/images/product1.jpg" },
    { id: 2, title: "Product 2", price: "$30", image: "/images/product2.jpg" },
    { id: 3, title: "Product 3", price: "$40", image: "/images/product3.jpg" },
 
  ]);

  // Handle adding product to cart
  const handleAddToCart = (product: Product) => {
    console.log(`${product.title} added to cart`);
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Banner */}
      <HeroBanner title="Shop" />

      {/* Results Filter */}
      <ResultsFilter
        currentPage={1} // Set a default page (or calculate dynamically)
        itemsPerPage1={16} // Example items per page, you can dynamically adjust this
        itemsPerPage2={24}
        itemsPerPage3={32}
        totalResults={products.length} // Pass the length of the products array
      />

<section className="max-full mx-auto px-4 py-0">
        {/* Product List */}
        <ProductList products={products} onAddToCart={handleAddToCart} />
  
        <div className="w-full mx-auto px-2 py-0 left-0 right-0 -ml-6">
          <Promises />
        </div>
      </section>
    </div>
  );
};

export default Shop;
