import React, { Fragment, useEffect, useState } from 'react';
import swell, { Product, Product as SwellProduct } from 'swell-js';
import { Link, PageProps } from 'gatsby';

import './product-item.styles.scss';
import { useProductsStore } from '../products.store';
import { shallow } from 'zustand/shallow';
import { productsService } from '../products.service';
import { WindowLocation } from '@reach/router';
import { commonHelpers } from '../../../__common/helpers';
import { OptionValueSnake } from 'swell-js/types/product/snake';
import { Toggle } from '../../../__common/__ui-kit/__radix/Toggle/Toggle.component';
import { Button } from '../../../__common/__ui-kit/button/button.component';
import { useCartStore } from '../../cart/cart.store';

export const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
  const openCart = useCartStore((state) => state.open);
  const [price, setPrice] = useState(() => product.price);

  async function addToCart(productId?: string) {
    if (!productId) alert('No product id!');

    const cartData = await swell.cart.addItem({
      product_id: productId,
      quantity: 1,
      options: [{ name: 'Color', value: 'red' }], // FIXME hardcoded
    });
    // alert('Added to cart');
    openCart();
  }

  function selectOption(optionValue: OptionValueSnake) {
    if (!optionValue.price || !product.price) return;

    setPrice(product.price + optionValue.price);
  }

  console.log('product', product);

  return (
    <div className='productItem'>
      <div className='productItem__images'>
        {product.images?.map((el) => {
          return <img key={el.file?.url} src={el.file?.url} alt='' />;
        })}
      </div>
      <div className='productItem__content'>
        <h1 className='productItem__name'>{product.name}</h1>
        <div className='productItem__row'>
          Price: {commonHelpers.formatPrice(price)} {product.currency}
        </div>
        <Button onClick={() => addToCart(product.id)}>Add to cart</Button>
        {product.options?.map((option) => {
          return (
            <div key={option.id} className='productItem__option'>
              <p className='productItem__optionName'>{option.name}:</p>
              {option.values?.map((optionValue) => {
                return (
                  <Button
                    key={optionValue.id}
                    className='productItem__optionValue'
                    onClick={() => selectOption(optionValue)}
                  >
                    {optionValue.name} (+{optionValue.price})
                  </Button>
                );
              })}
            </div>
          );
        })}
        {!!product.description && (
          <div className='productItem__description' dangerouslySetInnerHTML={{ __html: product.description }} />
        )}
      </div>
    </div>
  );
};
