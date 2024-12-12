"use client"
import React from "react";
import Navbar from "@/components/Navbar2";
import HeroBanner from "@/components/HeroBanner";

const Contact = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header */}
      <div>
        <Navbar/>
        <HeroBanner title="Contact"/>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-center text-2xl font-semibold">
          Get In Touch With Us
        </h2>
        <p className="text-center text-gray-500 mt-2 mb-8">
          For more information about our products and services, feel free to
          drop us an email or call.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="text-xl">&#128205;</span>
                <p className="text-gray-600">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-xl">&#9742;</span>
                <div>
                  <p>Mobile: (+84) 546-6789</p>
                  <p>Hotline: (+84) 456-6789</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-xl">&#128337;</span>
                <div>
                  <p>Monday-Friday: 9:00-22:00</p>
                  <p>Saturday-Sunday: 9:00-21:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label className="block mb-1 text-gray-600">Your Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md"
                  placeholder="Abc"
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-600">Email Address</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md"
                  placeholder="abc@def.com"
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-600">Subject</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md"
                  placeholder="This is optional"
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-600">Message</label>
                <textarea
                  className="w-full border border-gray-300 px-4 py-2 rounded-md"
                  placeholder="Hi! I'd like to ask about..."
                  rows={5}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
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
          <div>
            <h3 className="font-semibold">Secure Payment</h3>
            <p className="text-sm text-gray-600">
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
