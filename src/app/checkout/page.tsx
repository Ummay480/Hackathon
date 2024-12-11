"use client"
import React from 'react';
import Promises from '@/components/Promises';
import Navbar from '@/components/Navbar2';
import HeroBanner from '@/components/HeroBanner';

const Checkout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Navbar/>
      <HeroBanner title='Checkout'/>
        

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-4 grid md:grid-cols-3 gap-6">
        {/* Billing Details */}
        <section className="md:col-span-2 bg-white p-6 rounded shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Billing details</h2>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-3 border rounded w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 border rounded w-full"
              />
            </div>
            <input
              type="text"
              placeholder="Company Name (Optional)"
              className="p-3 border rounded w-full"
            />
            <select
              className="p-3 border rounded w-full"
              defaultValue="Country / Region"
            >
              <option disabled>Country / Region</option>
              <option value="Sri Lanka">Sri Lanka</option>
            </select>
            <input
              type="text"
              placeholder="Street Address"
              className="p-3 border rounded w-full"
            />
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Town / City"
                className="p-3 border rounded w-full"
              />
              <input
                type="text"
                placeholder="Province"
                className="p-3 border rounded w-full"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="ZIP Code"
                className="p-3 border rounded w-full"
              />
              <input
                type="text"
                placeholder="Phone"
                className="p-3 border rounded w-full"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 border rounded w-full"
            />
            <textarea
              placeholder="Additional Information"
              className="p-3 border rounded w-full"
              rows={4}
            ></textarea>
          </form>
        </section>

        {/* Order Summary */}
        <section className="bg-white p-6 rounded shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Product</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <p>Asgaard sofa x 1</p>
              <p>Rs. 250,000.00</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>Rs. 250,000.00</p>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <p>Total</p>
              <p>Rs. 250,000.00</p>
            </div>
          </div>
          <div className="mt-6 space-y-2">
            <div>
              <label className="flex items-center">
                <input type="radio" name="payment" className="mr-2" checked />
                Direct Bank Transfer
              </label>
              <p className="text-sm text-gray-500 ml-6">
                Make your payment directly into our bank account.
              </p>
            </div>
            <div>
              <label className="flex items-center">
                <input type="radio" name="payment" className="mr-2" />
                Cash On Delivery
              </label>
            </div>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded mt-6">
            Place Order
          </button>
        </section>
      </main>

      {/* Our Promises */}
      <Promises/>
    </div>
  );
};

export default Checkout;
