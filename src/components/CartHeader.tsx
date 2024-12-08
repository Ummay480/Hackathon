import Link from "next/link";

const CartHeader = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold">Meubel House</h1>
        </Link>
        <nav className="flex gap-6">
          <Link href="/shop" className="hover:text-gray-700">Shop</Link>
          <Link href="/about" className="hover:text-gray-700">About</Link>
          <Link href="/contact" className="hover:text-gray-700">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default CartHeader;
