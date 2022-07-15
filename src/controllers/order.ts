import { Request, Response } from 'express';
import order from '../services/order';

const getAll = async (_req: Request, res: Response) => {
  const ordersWithProducts = await order.getAll();
  res.status(200).json(ordersWithProducts);
};

export default {
  getAll,
};
