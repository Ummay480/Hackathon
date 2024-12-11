"use client"
import Image from "next/image";

const ProductSection = () => {
  const products = [
    {
      id: 1,
      image: "/images/image-10.png", // Actual image path
      name: "Tranton modular sofa_3",
      price: "Rs. 25,000.00",
    },
    {
      id: 2,
      image: "/images/image-11.png",
      name: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
    },
    {
      id: 3,
      image: "/images/image-9.png",
      name: "Outdoor bar table and stool",
      price: "Rs. 25,000.00",
    },
    {
      id: 4,
      image: "/images/image-8.png",
      name: "Plain console with teak mirror",
      price: "Rs. 35,000.00",
    },
  ];

  return (
    <div className="bg-secondary py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-accent text-center mb-8">
          Top Picks For You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="text-center">
              <Image
                src={product.image} // Use product-specific image
                alt={product.name}
                width={200}
                height={200}
                className="mx-auto"
              />
              <h3 className="text-lg font-semibold text-accent mt-4">
                {product.name}
              </h3>
              <p className="text-gray-500 mt-2">{product.price}</p>
            </div>
          ))}
        </div>
        {/* Single "View More" Button */}
        <div className="text-center text-xl font-semibold mt-8">
          <button className="text-black underline hover:text-gray-700">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
