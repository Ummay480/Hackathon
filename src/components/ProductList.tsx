// components/ProductList.tsx

import React from "react";

type Product = {
  title: string;
  price: string;
  image: string;
};

type ProductListProps = {
  products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product, index) => (
        <div key={index} className="border p-4">
          <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
          <h3 className="mt-2 text-lg font-bold">{product.title}</h3>
          <p className="text-gray-700">{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
