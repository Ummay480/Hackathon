import React from "react";
import Navbar2 from "@/components/Navbar2";
import HeroBanner from "@/components/HeroBanner";
import Promises from "@/components/Promises";

const MyAccount = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar2 />

      {/* Hero Banner */}
      <HeroBanner title="My Account" breadcrumb="Home > My Account" />

      {/* Login and Register Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Login Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Log In</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-medium">
                  Username or email address
                </label>
                <input
                  type="text"
                  id="username"
                  className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="mr-2 w-4 h-4 text-accent focus:ring-accent"
                />
                <label htmlFor="remember" className="text-sm">
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-accent text-white py-3 rounded-lg font-medium hover:bg-accent-dark"
              >
                Log In
              </button>
              <p className="text-sm text-right text-gray-600">
                <a href="/forgot-password" className="hover:underline">
                  Lost Your Password?
                </a>
              </p>
            </form>
          </div>

          {/* Register Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Register</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <p className="text-sm text-gray-600">
                A link to set a new password will be sent to your email address.
              </p>
              <p className="text-sm text-gray-600">
                Your personal data will be used to manage your account and for
                other purposes described in our{" "}
                <a href="/privacy-policy" className="text-accent hover:underline">
                  privacy policy
                </a>
                .
              </p>
              <button
                type="submit"
                className="w-full bg-accent text-white py-3 rounded-lg font-medium hover:bg-accent-dark"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Promises Section */}
      <Promises />
    </>
  );
};

export default MyAccount;
