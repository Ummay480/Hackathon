"use client"
import React from "react";
import Navbar from "@/components/Navbar2";
import Breadcrumb from "@/components/Breadcrumb";
import ProductGallery from "@/components/ProductGallery";
import ProductDetails from "@/components/ProductDetails";
import Tabs from "@/components/Tabs";
import RelatedProducts from "@/components/RelatedProducts";


const ProductPage = () => {
  return (
    <div className="bg-white text-gray-900"> 
    <Navbar/>
      <div className="container mx-auto w-full right-0 left-0 mb-6 text-lg active:font-semibold mt-4">
       
       {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Shop", href: "/shop" },
            { label: "Asgaard Sofa", href: "/product/asgaard-sofa" },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-8 mt-4">
          {/* Product Gallery */}
          <ProductGallery />

          {/* Product Details */}
          <ProductDetails />
        </div>
         {/* Tabs Section */}
        <Tabs />

        {/* Related Products */}
        <RelatedProducts />
      </div>
   </div>
  );
};

export default ProductPage;
