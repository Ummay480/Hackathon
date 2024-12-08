import Image from "next/image";

const BlogSection = () => {
  const blogs = Array.from({ length: 3 });

  return (
    <div className="bg-primary py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-accent text-center mb-8">
          Our Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((_, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <Image
                src="/blog.png" // Replace with your actual image path
                alt="Blog Post"
                width={400}
                height={250}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-accent">
                  Blog Title
                </h3>
                <p className="text-gray-500 mt-2">
                  Discover modern millennial designs for your space.
                </p>
                <p className="text-sm text-gray-400 mt-4">5 min read</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
