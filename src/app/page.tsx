
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import BlogSection from "@/components/BlogSection";
import NewArrival from "@/components/NewArrival";
import ProductCard from '../components/ProductCard';
import Navbar from "@/components/Navbar";
import Instagram from "@/components/Instagram";


const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <HeroSection />
      <div className="min-h-screen bg-red-50 flex items-center justify-center">
      <div className="grid grid-cols-2 gap-8">
        <ProductCard title="Side table" imageSrc="/images/image-3.png" />
        <ProductCard title="Side table" imageSrc="/images/image-17.png" />
      </div>
    </div>
    
      <ProductSection />      
      <NewArrival/>
      <BlogSection />
      <Instagram/>
    </div>
  );
};

export default Home;
