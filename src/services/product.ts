import IProduct from '../interfaces/Product';
import ProductModel from '../models/product';

const getAll = async (): Promise<IProduct[]> => {
  const products = await ProductModel.getAll();
  return products;
};

export default {
  getAll,
};
