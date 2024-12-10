"use client";

import Image from "next/image";
import { FaRegClock } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import Link from "next/link";

const BlogSection = () => {
  const blogs = [
    { id: 1, image: "/images/image-13.png" },
    { id: 2, image: "/images/image-14.png" },
    { id: 3, image: "/images/image-16.png" },
  ];

  return (
    <div className="bg-primary min-h-screen flex flex-col justify-center items-center py-16 px-4">
      <div className="max-w-7xl text-center">
        <h2 className="text-6xl font-normal text-accent mb-8">Our Blogs</h2>
        <p className="text-lg font-normal text-gray-400 mb-8">
          Find a bright ideal to suit your taste with our great selection
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="flex flex-col items-center">
              <Image
                src={blog.image}
                alt={`Blog Image ${blog.id}`}
                width={400}
                height={250}
                className="mb-4"
              />
              <h2 className="text-2xl text-gray-500 mt-2">
                Discover modern millennial designs for your space.
              </h2>
              <div className="flex items-center justify-center text-sm text-gray-400 mt-4 space-x-4">
                <div className="flex items-center space-x-1">
                  <FaRegClock />
                  <span>5 min read</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CiCalendar />
                  <span>12 October</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Corrected Link without <a> */}
        <div className="mt-10">
        <Link
          href="/blog"
          className="inline-block px-6 py-2 underline border-gray-800 text-gray-800 text-2xl font-bold rounded hover:bg-gray-800 hover:text-white transition"
        >
          View All
        </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;

