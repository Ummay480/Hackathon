import Link from "next/link";
interface ProductCard2Props {
  title: string;
  price: string;
  image: string;
  onAddToCart: () => void;
}

const ProductCard2: React.FC<ProductCard2Props> = ({ title, price, image, onAddToCart }) => {
  return (
    <div className="border rounded p-4 relative group">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="text-gray-500">{price}</p>
       <Link
          href="/product">
      <button
        onClick={onAddToCart}
        className="w-full mt-2 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        Add to Cart
      </button>
      </Link>
    </div>
  );
};

export default ProductCard2;