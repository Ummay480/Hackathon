"use client";
import React from "react";
import ProductCard2 from "@/components/ProductCard2";

// Define product interface
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
  // Add the rest of the products here...
];


const ProductList: React.FC = () => {
  const handleAddToCart = (title: string) => {
    console.log(`${title} added to cart`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product, index) => (
        <ProductCard2
          key={index}
          {...product}
          onAddToCart={() => handleAddToCart(product.title)} // Pass the onAddToCart function
        />
      ))}
    </div>
  );
};

export default ProductList;