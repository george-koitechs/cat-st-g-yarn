import { create } from 'zustand';

import { IProductsState } from './products.types';

export const useProductsStore = create<IProductsState>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  product: null,
  setProduct: (product) => set({ product }),
}));
