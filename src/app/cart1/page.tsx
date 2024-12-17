// "use client";

// import React, { useState } from "react";
// import CartSidebar from "@/components/CartSidebar"; // Ensure the path is correct based on your project structure

// const Cart1 = () => {
//   const [isCartVisible, setCartVisible] = useState(false);

//   const openCart = () => setCartVisible(true);
//   const closeCart = () => setCartVisible(false);

//   return (
//     <div className="relative h-screen">
//       {/* Main Content */}
//       <div className="flex justify-center items-center h-full">
//         <button
//           onClick={openCart}
//           className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800"
//         >
//           Add to Cart
//         </button>
//       </div>

//       {/* Cart Sidebar */}
//       {isCartVisible && (
//         <CartSidebar isVisible={isCartVisible} onClose={closeCart} />
//       )}
//     </div>
//   );
// };

// export default Cart1;
