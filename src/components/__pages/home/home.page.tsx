import React from 'react';
import { useCartStore } from '../../../zustand/cart.store';
import { ICartItem } from '../../../zustand/cart.types';
import { creamItem, oliveItem } from '../../../mockItems';
import { Products } from '../../products/products.component';
import swell from 'swell-js';

export const HomePage = () => {
  const openCart = useCartStore((state) => state.open);
  const addItem = useCartStore((state) => state.addItem);

  function addItemToCart(item: ICartItem) {
    addItem(item);
    openCart();
  }
  async function getCart() {
    const cartData = await swell.cart.get();
    console.log('getCart', cartData);
  }
  async function submitOrder() {
    await swell.cart.submitOrder();
  }
  async function createAccount() {
    // const mockAcc = {
    //   account: {
    //     email_optin: false,
    //     email: 'scorpion11133@gmail.com',
    //     password: '1111111',
    //   },
    //   account_info_saved: true,
    //   shipping: {
    //     first_name: 'as',
    //     last_name: 'As',
    //     address1: 'as',
    //     city: 'asd',
    //     country: 'CA',
    //     state: 'BC',
    //     zip: '23123',
    //   },
    // };
    await swell.account.create({
      email: 'scorpion11133@gmail.com',
    });
  }

  return (
    <>
      <div style={{ display: 'grid', gap: 10, maxWidth: 300, padding: 50 }}>
        <button onClick={openCart}>Open Cart</button>
        <button onClick={() => addItemToCart(creamItem)}>Add creme</button>
        <button onClick={() => addItemToCart(oliveItem)}>Add olive</button>
      </div>
      <button onClick={createAccount}>createAccount</button>
      <button onClick={submitOrder}>submitOrder</button>
      <button onClick={getCart}>getCart</button>
      <Products />
    </>
  );
};
