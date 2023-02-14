import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import { Layout } from '../domains/layout/layout.component';
import { productsService } from '../domains/products/products.service';
import { Product } from 'swell-js';
import { HomePage } from '../domains/home/home.page';
import { IPageProps } from '../__common/types';

const IndexPage: React.FC<IPageProps<{ data: any }>> = (props) => {
  // const IndexPage = (props:PageProps) => {
  console.log('data', props.serverData);
  return (
    <Layout>
      <h1>{props.serverData.data?.title}</h1>
      <h1>client</h1>
      {/*<HomePage products={props.serverData.products} />*/}
    </Layout>
  );
};

export async function getServerData() {
  // const productsData = await productsService.getAll();
  const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => json);

  return {
    props: { data },
    // props: { products: productsData.results },
  };
}

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
