import React from 'react';

interface ProductCardProps {
  title: string;
  imageSrc: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, imageSrc }) => {
  return (
    <div className="flex flex-col items-center px-32">
      <img src={imageSrc} alt={title} className="w-400 3-400 object-cover" />
      <h2 className="mt-4 text-lg font-medium">{title}</h2>
      <a href="#" className="mt-2 text-black-500 underline">
        View More
      </a>
    </div>
  );
};

export default ProductCard;
