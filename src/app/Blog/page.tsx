import Header from "@/components/Header";
import BlogPost from "@/components/BlogPost";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const BlogPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <Header title="Blog" breadcrumb={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }]} />

      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Blog Posts */}
          <div className="w-full lg:w-3/4">
            <BlogPost
              image="/path/to/image1.jpg"
              category="Wood"
              date="14 Oct 2022"
              title="Going all-in with millennial design"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
              author="Admin"
            />
            <BlogPost
              image="/path/to/image2.jpg"
              category="Handmade"
              date="14 Oct 2022"
              title="Exploring new ways of decorating"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
              author="Admin"
            />
            <BlogPost
              image="/path/to/image3.jpg"
              category="Wood"
              date="14 Oct 2022"
              title="Handmade pieces that took time to make"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
              author="Admin"
            />
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="flex gap-4">
            <button className="px-4 py-2 border rounded-md bg-gray-100 hover:bg-gray-200">1</button>
            <button className="px-4 py-2 border rounded-md bg-gray-100 hover:bg-gray-200">2</button>
            <button className="px-4 py-2 border rounded-md bg-gray-100 hover:bg-gray-200">3</button>
            <button className="px-4 py-2 border rounded-md bg-gray-100 hover:bg-gray-200">Next</button>
          </nav>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BlogPage;
