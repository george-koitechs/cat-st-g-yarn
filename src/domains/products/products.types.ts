import { Product as ISwellProduct } from 'swell-js';

export interface IProductsState {
  products: ISwellProduct[];
  setProducts: (products: ISwellProduct[]) => void;
  product: null | ISwellProduct;
  setProduct: (product: ISwellProduct) => void;
}
