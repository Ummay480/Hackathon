"use client"
import React, { useEffect, useState } from 'react';
import Header from '@/components/CartHeader';
import HeroBanner from '@/components/HeroBanner';
import CartTable from '@/components/CartTable';
import CartTotals from '@/components/CartTotal';

const fetchCartItems = async (): Promise<{ id: number; name: string; price: number; }[]> => {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          { id: 1, name: 'Asgaard Sofa', price: 25000 },
          { id: 2, name: 'Granite Table', price: 20000 },
        ]),
      1000
    )
  );
};

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<{ id: number; name: string; price: number; }[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchCartItems()
      .then((data) => {
        setCartItems(data);
        setIsLoading(false);
      })
      .catch(() => {
        setCartItems([]);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <Header />
      <HeroBanner title="Cart" />
      <main className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {isLoading ? <p>Loading...</p> : <CartTable cartItems={cartItems} />}
        </div>
        <div>
          <CartTotals />
        </div>
      </main>
    </div>
  );
};

export default Cart;
