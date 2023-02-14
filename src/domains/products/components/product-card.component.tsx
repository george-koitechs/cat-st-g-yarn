import React, { Fragment } from 'react';
import { Product } from 'swell-js';
import { Link } from 'gatsby';

import './product-card.styles.scss';

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div key={product.id} className='productCard'>
      <img className='productCard__image' src={product.images?.[0].file?.url} alt='' />
      <h6 className='productCard__name'>{product.name}</h6>
      {product.options?.map((o) => {
        return (
          <Fragment key={o.id}>
            <p>{o.name}:</p>
            <div className='productCard__options'>
              {o.values?.map((v) => {
                return <span key={v.id}>{v.name}</span>;
              })}
            </div>
          </Fragment>
        );
      })}
      <div className='productCard__actions'>
        <Link className='productCard__btn' to={`/products/${product.id}`}>
          Details
        </Link>
        {/*<button className='productCard__btn' onClick={() => addToCart(product.id)}>*/}
        {/*  Add to cart*/}
        {/*</button>*/}
      </div>
    </div>
  );
};
