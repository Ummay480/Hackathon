import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      {/* Footer Content */}
      <div className="max-w-6xl mx-auto py-8 grid md:grid-cols-4 gap-6 px-4">
        {/* Address Section */}
        <div>
          <p className="text-sm">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h4 className="font-medium mb-2">Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h4 className="font-medium mb-2">Help</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Payment Options</a></li>
            <li><a href="#" className="hover:underline">Returns</a></li>
            <li><a href="#" className="hover:underline">Privacy Policies</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h4 className="font-medium mb-2">Newsletter</h4>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-200 py-4 text-center text-sm text-gray-600">
        <p>2022 Meubel House. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
