import { Request, Response } from 'express';
import UserService from '../services/user';

const create = async (req: Request, res: Response) => {
  const user = req.body;
  const token = await UserService.create(user);
  res.status(201).json({ token });
};

export default {
  create,
};
