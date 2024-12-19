"use client";

import Link from "next/link";
import Image from "next/image";

// Define the Product type
type Product = {
  title: string;
  price: string;
  image: string;
};

type ProductListProps = {
  products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  // Function to handle adding a product to the cart
  const handleAddToCart = (product: Product) => {
    console.log("Product added to cart:", product);
    // Implement cart logic here
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product, index) => (
        <div key={index} className="border p-4 group">
          <Image
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover"
            width={300}
            height={200}
          />
          <h3 className="mt-2 text-lg font-bold">{product.title}</h3>
          <p className="text-gray-700">{product.price}</p>

          <Link href="/product">                   
          <button
            onClick={() => handleAddToCart(product)}
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
