import { Request, Response } from 'express';
import OrderService from '../services/order';

const getAll = async (_req: Request, res: Response) => {
  const ordersWithProducts = await OrderService.getAll();
  res.status(200).json(ordersWithProducts);
};

export default {
  getAll,
};
