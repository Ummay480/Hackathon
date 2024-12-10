const CartTotals = () => (
    <div className="bg-gray-50 p-6 rounded-md shadow-sm">
      <h2 className="text-lg font-bold mb-4">Cart Totals</h2>
      <div className="flex justify-between border-b pb-2 mb-4">
        <span>Subtotal</span>
        <span>Rs. 250,000.00</span>
      </div>
      <div className="flex justify-between border-b pb-2 mb-4">
        <span>Total</span>
        <span>Rs. 250,000.00</span>
      </div>
      <button className="bg-yellow-400 text-white px-6 py-2 rounded-md w-full">Check Out</button>
    </div>
  );
  
  export default CartTotals;
  