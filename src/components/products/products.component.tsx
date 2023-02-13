import React, { Fragment, useEffect, useState } from 'react';
import swell, { Product } from 'swell-js';

import './products.styles.scss';

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  async function getProducts() {
    const productsData = await swell.products.list({ limit: 25, page: 1 });
    setProducts(productsData.results);
  }

  async function addToCart(productId?: string) {
    if (!productId) alert('No product id!');

    const cartData = await swell.cart.addItem({
      product_id: productId,
      quantity: 1,
      options: [{ name: 'Color', value: 'red' }], // FIXME hardcoded
    });
    alert('Added to cart');
  }

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className='products'>
      {products.map((p) => {
        return (
          <div key={p.id} className='product'>
            <img className='product__image' src={p.images?.[0].file?.url} alt='' />
            <h6 className='product__name'>{p.name}</h6>
            {p.options?.map((o) => {
              return (
                <Fragment key={o.id}>
                  <p>{o.name}:</p>
                  <div className='product__options'>
                    {o.values?.map((v) => {
                      return <span key={v.id}>{v.name}</span>;
                    })}
                  </div>
                </Fragment>
              );
            })}

            <button className='product__btn' onClick={() => addToCart(p.id)}>
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};
