import { useState } from "react";
import CartHeader from "@/components/CartHeader";
import ProductDetails from "@/components/CartProductDetails";
import RelatedProducts from "@/components/RelatedProducts";

import CartSidebar from "@/components/CartSidebar";

const Product1Page = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <CartHeader />

      {/* Main Content */}
      <main className="container mx-auto px-4 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Product Details */}
          <ProductDetails onCartOpen={() => setIsCartOpen(true)} />
        </div>
      </main>

      {/* Related Products */}
      <RelatedProducts />

          {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Product1Page;
