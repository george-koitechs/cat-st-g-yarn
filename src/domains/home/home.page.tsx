import React from 'react';
import { useCartStore } from '../cart/cart.store';
import { ICartItem } from '../cart/cart.types';
import { Products } from '../products/components/products.component';
import { Product } from 'swell-js';

export const HomePage: React.FC<{ products: Product[] }> = ({ products }) => {
  const openCart = useCartStore((state) => state.open);
  const addItem = useCartStore((state) => state.addItem);

  function addItemToCart(item: ICartItem) {
    addItem(item);
    openCart();
  }

  return (
    <div className='home'>
      <h1>Cats Street</h1>
      <Products products={products} />
    </div>
  );
};
