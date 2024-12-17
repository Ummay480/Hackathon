"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  title: string;
  imageSrc: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, imageSrc }) => {
  return (
    <div className="flex flex-col items-center px-32">
      <Image 
        src={imageSrc} 
        alt={title} 
        className="object-cover" 
        width={400}  // Set the appropriate width for the image
        height={400} // Set the appropriate height for the image
      />
      <h2 className="mt-4 text-lg font-medium">{title}</h2>
      <Link href="/shop" className="mt-2 text-black-500 underline">
        View More
      </Link>
    </div>
  );
};

export default ProductCard;
