"use client"
import React, { useState } from 'react';
import HeroBanner from '@/components/HeroBanner';
import ProductCard2 from '@/components/ProductCard2';
import Navbar from "@/components/Navbar2";
import ResultsFilter from '@/components/ResultsFilter';
import Pagination from '@/components/Pagination'; // Import Pagination component

const products = [
    { title: 'Trenton modular sofa', price: 'Rs. 25,000.00', image: '/images/image-7.png' },
    { title: 'Granite dining table', price: 'Rs. 25,000.00', image: '/images/image-2.png' },
    { title: 'Outdoor bar table', price: 'Rs. 25,000.00', image: '/images/image-9.png' },
    { title: 'Plain console with teak mirror', price: 'Rs. 25,000.00', image: '/images/image-8.png' },
    { title: 'Grain coffee table', price: 'Rs. 15,000.00', image: '/images/image-6.png' },
    { title: 'Kent coffee table', price: 'Rs. 225,000.00', image: '/images/image-5.png' },
    { title: 'Round coffee table', price: 'Rs. 251,000.00', image: '/images/image-4.png' },
    { title: 'Reclaimed teak coffee table', price: 'Rs. 25,200.00', image: '/images/image-22.png' },
    { title: 'Plain console', price: 'Rs. 258,200.00', image: '/images/image-21.png' },
    { title: 'Reclaimed teak Sideboard', price: 'Rs. 20,000.00', image: '/images/image-3.png' },
    { title: 'Bella chair and table', price: 'Rs. 100,000.00', image: '/images/image-18.png' },
    { title: 'Trenton modular sofa', price: 'Rs. 25,000.00', image: '/images/image-7.png' },
    { title: 'Granite dining table', price: 'Rs. 25,000.00', image: '/images/image-2.png' },
    { title: 'Outdoor bar table', price: 'Rs. 25,000.00', image: '/images/image-9.png' },
    { title: 'Plain console with teak mirror', price: 'Rs. 25,000.00', image: '/images/image-8.png' },
    { title: 'Grain coffee table', price: 'Rs. 15,000.00', image: '/images/image-6.png' },
    { title: 'Kent coffee table', price: 'Rs. 225,000.00', image: '/images/image-5.png' },
    { title: 'Round coffee table', price: 'Rs. 251,000.00', image: '/images/image-4.png' },
    { title: 'Reclaimed teak coffee table', price: 'Rs. 25,200.00', image: '/images/image-22.png' },
    { title: 'Plain console', price: 'Rs. 258,200.00', image: '/images/image-21.png' },
    { title: 'Reclaimed teak Sideboard', price: 'Rs. 20,000.00', image: '/images/image-3.png' },
    { title: 'Bella chair and table', price: 'Rs. 100,000.00', image: '/images/image-18.png' },
    { title: 'Trenton modular sofa', price: 'Rs. 25,000.00', image: '/images/image-7.png' },
    { title: 'Granite dining table', price: 'Rs. 25,000.00', image: '/images/image-2.png' },
    { title: 'Outdoor bar table', price: 'Rs. 25,000.00', image: '/images/image-9.png' },
    { title: 'Plain console with teak mirror', price: 'Rs. 25,000.00', image: '/images/image-8.png' },
    { title: 'Grain coffee table', price: 'Rs. 15,000.00', image: '/images/image-6.png' },
    { title: 'Kent coffee table', price: 'Rs. 225,000.00', image: '/images/image-5.png' },
    { title: 'Round coffee table', price: 'Rs. 251,000.00', image: '/images/image-4.png' },
    { title: 'Reclaimed teak coffee table', price: 'Rs. 25,200.00', image: '/images/image-22.png' },
    { title: 'Plain console', price: 'Rs. 258,200.00', image: '/images/image-21.png' },
    { title: 'Reclaimed teak Sideboard', price: 'Rs. 20,000.00', image: '/images/image-3.png' },
   
];

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  const totalResults = products.length;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Navbar />
      <HeroBanner />
      <ResultsFilter
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalResults={totalResults}
      />
      <section className="max-w-7xl mx-auto px-4 py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products
            .slice(
              (currentPage - 1) * itemsPerPage,
              currentPage * itemsPerPage
            )
            .map((product, index) => (
              <ProductCard2 key={index} {...product} />
            ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(totalResults / itemsPerPage)}
          onPageChange={handlePageChange}
        />
        <div className="bg-pink-50 py-8 border-t">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold">Free Delivery</h3>
            <p className="text-sm text-gray-600">
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">90 Days Return</h3>
            <p className="text-sm text-gray-600">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          </div>
          </div>
      </section>
    </div>
    
  );
};

export default Shop;
