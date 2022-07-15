import { IOrderWithProducts } from '../interfaces/Order';
import OrderModel from '../models/order';
import ProductModel from '../models/product';

const getAll = async (): Promise<IOrderWithProducts[]> => {
  const orders = await OrderModel.getAll();
  const products = await ProductModel.getAll();
  const ordersWithProducts = orders.map(({ id, userId }) => {
    const productsIds = products.filter(({ orderId }) => orderId === id)
      .map((product) => product.id);
    return { id, userId, productsIds };
  });
  return ordersWithProducts as IOrderWithProducts[];
};

export default {
  getAll,
};