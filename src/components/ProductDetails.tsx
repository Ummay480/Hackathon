"use client";
import Link from "next/link";
import SocialMedia from "./SocialMedia";

const ProductDetails = () => {
  return (
    <div className="absolute w-[606.01px] h-[730.87px] left-[690px] opacity-100 gap-0">
      <div className="lg:w-1/2">
        <h1 className="text-2xl font-semibold">Asgaard Sofa</h1>
        <p className="text-lg text-gray-500">Rs. 250,000.00</p>

        <div className="flex items-center gap-2 mt-2">
          <div className="text-yellow-500">★★★★☆</div>
          <p className="text-sm text-gray-400">(5 Customer Reviews)</p>
        </div>

        <p className="mt-4 text-gray-700 text-sm font-normal">
          Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
        </p>

        {/* Size Selector */}
        <div className="mt-6">
          <h3 className="text-sm text-gray-500">Size</h3>
          <div className="flex gap-2">
            {["L", "XL", "XS"].map((size) => (
              <button
                key={size}
                className="py-1 px-4 border rounded-md hover:bg-gray-100"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color Selector */}
        <div className="mt-6">
          <h3 className="text-sm text-gray-500">Color</h3>
          <div className="flex gap-2">
            {["purple", "blue", "gold"].map((color) => (
              <button
                key={color}
                className={`w-8 h-8 rounded-full border border-gray-300 bg-${color}-500`}
              ></button>
            ))}
          </div>
        </div>

        {/* Add to Cart */}
        <div className="mt-6 border-b-2 pb-6">  {/* Added border under the input */}
          <div className="flex gap-4 items-center">
            <input
              type="number"
              defaultValue={1}
              className="w-14 h-12 text-center border rounded-md"
            />
            <div className="mt-2">
              <Link
                href="/cart"
                className="px-6 py-2 text-gray-800 text-3xl font-normal rounded-md border-black border-2 hover:bg-gray-800 hover:text-white transition"
              >
                Add to cart
              </Link>
            </div>
          </div>
        </div>
        <SocialMedia />
      </div>
    </div>
  );
};

export default ProductDetails;
