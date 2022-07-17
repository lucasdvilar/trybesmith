import { Request, Response } from 'express';
import OrderService from '../services/order';

const getAll = async (_req: Request, res: Response) => {
  const ordersWithProducts = await OrderService.getAll();
  res.status(200).json(ordersWithProducts);
};

const create = async (req: Request, res: Response) => {
  const orderInfo = req.body;
  await OrderService.create(orderInfo);
  res.status(201).json(orderInfo);
};

export default {
  getAll,
  create,
};
