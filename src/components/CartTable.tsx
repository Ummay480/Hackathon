import React, { FC } from 'react';

// Define a type for your cart items
type CartItem = {
  id: number;
  name: string;
  price: number;
};

// Define the props type for the CartTable component
interface CartTableProps {
  cartItems: CartItem[] | undefined; // Accept undefined to handle empty data
}

const CartTable: FC<CartTableProps> = ({ cartItems }) => {
  // Check if cartItems is undefined or empty
  if (!cartItems || cartItems.length === 0) {
    return <p>No items in the cart.</p>; // Fallback UI
  }

  return (
    <table className="w-full border-collapse border border-gray-200">
      <thead>
        <tr>
          <th className="border border-gray-200 p-2">Product</th>
          <th className="border border-gray-200 p-2">Price</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <tr key={item.id}>
            <td className="border border-gray-200 p-2">{item.name}</td>
            <td className="border border-gray-200 p-2">Rs. {item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;
