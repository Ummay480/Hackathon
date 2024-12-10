
import Link from "next/link";
const ProductDetails = () => {
    return (
      <div className="lg:w-1/2">
        <h1 className="text-2xl font-semibold">Asgaard Sofa</h1>
        <p className="text-lg text-gray-500">Rs. 250,000.00</p>
  
        <div className="flex items-center gap-2 mt-2">
          <div className="text-yellow-500">★★★★☆</div>
          <p className="text-sm text-gray-400">(5 Customer Reviews)</p>
        </div>
  
        <p className="mt-4 text-gray-700">
          Setting the bar as one of the loudest speakers in its class...
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
        <div className="mt-6">
          <div className="flex gap-4 items-center">
            <input
              type="number"
              defaultValue={1}
              className="w-12 text-center border rounded-md"
            />
             <div className="mt-10">
        <Link
          href="/checkout"
          className="inline-block px-6 py-2 underline border-gray-800 text-gray-800 text-2xl font-bold rounded hover:bg-gray-800 hover:text-white transition"
        >
          Add to cart
        </Link>
        </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductDetails;
  