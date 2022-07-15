import IProduct from '../interfaces/Product';
import ProductModel from '../models/product';

const getAll = async (): Promise<IProduct[]> => {
  const products = await ProductModel.getAll();
  return products;
};

const create = async (product: IProduct): Promise<IProduct> => {
  const createdProduct = await ProductModel.create(product);
  return createdProduct;
};

export default {
  getAll,
  create,
};
