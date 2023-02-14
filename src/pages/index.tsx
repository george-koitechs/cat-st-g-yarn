import * as React from 'react';
import type { HeadFC } from 'gatsby';

import { Layout } from '../domains/layout/layout.component';
import { productsService } from '../domains/products/products.service';
import { Product } from 'swell-js';
import { HomePage } from '../domains/home/home.page';
import { IPageProps } from '../__common/types';

const IndexPage: React.FC<IPageProps<{ products: Product[] }>> = (props) => {
  return (
    <Layout>
      <h1>adadsa</h1>
      {/*<HomePage products={props.serverData.products} />*/}
    </Layout>
  );
};

export async function getServerData() {
  const productsData = await productsService.getAll();

  return {
    props: {},
    // props: { products: productsData.results },
  };
}

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
