import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { Layout } from '../../domains/layout/layout.component';
import { ProductItem } from '../../domains/products/components/product-item.component';
import { productsService } from '../../domains/products/products.service';
import { Product } from 'swell-js';
import { IPageProps } from '../../__common/types';

const ProductPage: React.FC<IPageProps<{ product: Product }>> = (props) => {
  console.log('props', props);
  return (
    <Layout>
      <div className='container'>
        <ProductItem product={props.serverData.product} />
      </div>
    </Layout>
  );
};

export async function getServerData(context: { params: Record<string, any> }) {
  const product = await productsService.getOne(context.params.id);

  return {
    props: { product },
  };
}

export default ProductPage;

export const Head: HeadFC = () => <title>ProductPage</title>;
