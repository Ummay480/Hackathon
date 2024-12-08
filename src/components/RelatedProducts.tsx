const RelatedProducts = () => {
    const products = [
      { name: "Trenton modular sofa", price: 25000 },
      { name: "Granite dining table", price: 25000 },
      { name: "Outdoor bar table", price: 25000 },
      { name: "Plain console", price: 25000 },
    ];
  
    return (
      <div className="mt-12">
        <h3 className="text-xl font-medium mb-4">Related Products</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <div key={index} className="text-center">
              <img
                src="/path/to/product.png"
                alt={product.name}
                className="rounded-md mb-2"
              />
              <p className="text-gray-700">{product.name}</p>
              <p className="text-gray-500">Rs. {product.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default RelatedProducts;
  