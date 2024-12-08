import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="bg-primary py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold text-accent">
            Rocket Single Seater
          </h1>
          <p className="mt-4 text-gray-700">
            Comfortable and stylish chairs for your home.
          </p>
          <button className="mt-6 px-6 py-3 bg-accent text-white rounded-lg hover:bg-gray-800">
            Shop Now
          </button>
        </div>
        <div className="mt-8 lg:mt-0">
          <Image
            src="/chair.png" // Replace with your actual image path
            alt="Rocket Single Seater"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
