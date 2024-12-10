"use client"
import Link from 'next/link';

const ProductHeader = () => (
  <header className="bg-white shadow-sm sticky top-0 z-10">
    <nav className="flex items-center justify-between px-8 py-4">
      <div className="font-bold text-xl">Shop</div>
      <ul className="flex gap-6 text-gray-700">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/shop">Shop</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default ProductHeader;
