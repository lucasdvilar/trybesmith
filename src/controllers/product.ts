import { Request, Response } from 'express';
import ProductService from '../services/product';

const getAll = async (_req: Request, res: Response) => {
  const products = await ProductService.getAll();
  res.status(200).json(products);
};

const create = async (req: Request, res: Response) => {
  const product = req.body;
  const createdProduct = await ProductService.create(product);
  res.status(201).json(createdProduct);
};

export default {
  getAll,
  create,
};
