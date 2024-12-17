
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import BlogSection from "@/components/BlogSection";
import NewArrival from "@/components/NewArrival";
import SideTables from "@/components/SideTable";
import Navbar from "@/components/Navbar";
import Instagram from "@/components/Instagram";


const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <HeroSection />
      <SideTables/>    
         <ProductSection />      
      <NewArrival/>
      <BlogSection />
      <Instagram/>
    </div>
  );
};

export default Home;
