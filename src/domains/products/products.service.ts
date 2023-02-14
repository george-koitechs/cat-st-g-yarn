import swell from 'swell-js';

async function getAll() {
  return await swell.products.list({ limit: 25, page: 1 });
}
async function getOne(id: string) {
  return await swell.products.get(id);
}

export const productsService = { getAll, getOne };
