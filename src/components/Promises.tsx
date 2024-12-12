"use client";
import React from "react";

const Promises: React.FC = () => {
  return (
    <div className="w-full mx-auto bg-pink-50 py-8 border-t px-10 right-0 left-0">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
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
        <div>
          <h3 className="font-semibold">Secure Payment</h3>
          <p className="text-sm text-gray-600">
            100% secure payment, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Promises;
