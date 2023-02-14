import React, { Fragment, useEffect } from 'react';
import swell, { Product } from 'swell-js';

import './products.styles.scss';
import { Link } from 'gatsby';
import { productsService } from '../products.service';
import { shallow } from 'zustand/shallow';
import { useProductsStore } from '../products.store';
import { ProductCard } from './product-card.component';

export const Products: React.FC<{ products: Product[] }> = ({ products }) => {
  // const [products, setProducts] = useProductsStore((state) => [state.products, state.setProducts], shallow);
  //
  // async function getProducts() {
  //   const productsData = await productsService.getAll();
  //   setProducts(productsData.results);
  // }

  // async function addToCart(productId?: string) {
  //   if (!productId) alert('No product id!');
  //
  //   const cartData = await swell.cart.addItem({
  //     product_id: productId,
  //     quantity: 1,
  //     options: [{ name: 'Color', value: 'red' }], // FIXME hardcoded
  //   });
  //   alert('Added to cart');
  // }

  // useEffect(() => {
  //   getProducts();
  // }, []);
  return (
    <div className='products'>
      {products.map((p) => {
        return <ProductCard key={p.id} product={p} />;
      })}
    </div>
  );
};
