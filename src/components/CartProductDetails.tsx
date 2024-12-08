interface ProductDetailsProps {
    onCartOpen: () => void;
  }
  
  const CartProductDetails: React.FC<ProductDetailsProps> = ({ onCartOpen }) => {
    return (
      <div className="lg:w-3/4">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-4">
          <a href="/" className="hover:text-gray-700">Home</a> / <a href="/shop" className="hover:text-gray-700">Shop</a> / Asgaard Sofa
        </nav>
  
        {/* Product Information */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image Gallery */}
          <div className="w-full lg:w-1/2">
            <img src="/path/to/product-image.jpg" alt="Product Image" className="w-full h-96 object-cover rounded-md" />
            <div className="flex gap-4 mt-4">
              {[1, 2, 3, 4].map((_, i) => (
                <img key={i} src="/path/to/thumbnail.jpg" alt={`Thumbnail ${i}`} className="w-16 h-16 object-cover rounded-md cursor-pointer" />
              ))}
            </div>
          </div>
  
          {/* Product Details */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-semibold mb-2">Asgaard Sofa</h2>
            <p className="text-gray-600 mb-2">Rs. 250,000.00</p>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-yellow-400">
                {Array(5).fill("⭐")}
              </div>
              <span className="text-sm text-gray-500">(5 Customer Reviews)</span>
            </div>
            <p className="text-gray-700 mb-6">Setting the bar as one of the loudest speakers in its class...</p>
  
            {/* Size Options */}
            <div className="mb-4">
              <h4 className="text-sm font-medium mb-2">Size</h4>
              <div className="flex gap-2">
                {["L", "XL", "XS"].map((size) => (
                  <button key={size} className="px-3 py-2 border rounded-md hover:bg-gray-100">{size}</button>
                ))}
              </div>
            </div>
  
            {/* Color Options */}
            <div className="mb-6">
              <h4 className="text-sm font-medium mb-2">Color</h4>
              <div className="flex gap-2">
                {["bg-black", "bg-blue-500", "bg-yellow-500"].map((color, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full ${color} cursor-pointer border`}></div>
                ))}
              </div>
            </div>
  
            {/* Add to Cart */}
            <div className="flex items-center gap-4">
              <input type="number" defaultValue={1} min={1} className="w-12 border text-center rounded-md" />
              <button
                className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                onClick={onCartOpen}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CartProductDetails;
  