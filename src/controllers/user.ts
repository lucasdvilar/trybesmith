import { NextFunction, Request, Response } from 'express';
import ValidationError from '../interfaces/ValidationError';
import UserService from '../services/user';

const create = async (req: Request, res: Response) => {
  const user = req.body;
  const token = await UserService.create(user);
  res.status(201).json({ token });
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.body;
  const token = await UserService.login(user);
  const { code, message } = token as ValidationError;
  if (code && message) return next({ code, message });
  res.status(200).json({ token });
};

export default {
  create,
  login,
};
