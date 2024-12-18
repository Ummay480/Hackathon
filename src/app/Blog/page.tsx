import Navbar from "@/components/Navbar2";
import HeroBanner from "@/components/HeroBanner";
import BlogPost from "@/components/BlogPost";
import Sidebar from "@/components/Sidebar";
import Promises from "@/components/Promises";


const blogPage = () => {
  return (
    <div>
      <Navbar />
      <HeroBanner title="Blog" />

      <div className="container mx-auto px-4 lg:px-8 py-12 overflow-x-hidden">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Blog Posts */}
          <div className="w-full lg:w-3/4">
            <BlogPost
              image="/images/image-33.png"
              category="Wood"
              date="14 Oct 2022"
              title="Going all-in with millennial design"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
              author="Admin"
            />
            <BlogPost
               image="/images/image-34.png"
              category="Handmade"
              date="14 Oct 2022"
              title="Exploring new ways of decorating"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
              author="Admin"
            />
            <BlogPost
             image="/images/image-32.png"
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
            <button className="px-4 py-2 border rounded-md bg-amber-50 hover:bg-amber-100">2</button>
            <button className="px-4 py-2 border rounded-md bg-amber-50 hover:bg-amber-100">3</button>
            <button className="px-4 py-2 border rounded-md bg-amber-50 hover:bg-amber-100">Next</button>
            <button className="px-4 py-2 border rounded-md bg-amber-50 hover:bg-amber-100">1</button>
          </nav>
        </div>
       </div>
       <Promises/>
    </div>
  );
};

export default blogPage;
