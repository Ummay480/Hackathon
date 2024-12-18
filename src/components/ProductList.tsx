import React from "react";
import Link from "next/link";

interface Product {
  title: string;
  price: string;
  image: string;
}

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void; // Add this prop
}

const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product, index) => (
        <div
          key={index}
          className="p-4 border rounded-lg shadow group hover:bg-gray-100 transition-all duration-300"
        >
          {/* Product Image */}
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover mb-4"
          />

          {/* Product Title */}
          <h3 className="text-lg font-semibold">{product.title}</h3>

          {/* Product Price */}
          <p className="text-gray-700">{product.price}</p>

          {/* Add to Cart Button */}
          <Link href="/cart" passHref>
            <button
              onClick={() => onAddToCart(product)} // Trigger the function
              className="w-full mt-2 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Add to Cart
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
