import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import { CheckoutPage } from '../domains/checkout/checkout.page';
import { Layout } from '../domains/layout/layout.component';
import { productsService } from '../domains/products/products.service';

const PageCheckout: React.FC<PageProps> = () => {
  return (
    <Layout>
      <CheckoutPage />
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

export default PageCheckout;

export const Head: HeadFC = () => <title>Checkout Page</title>;
