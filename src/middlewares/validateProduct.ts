import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const validateProduct = async (req: Request, _res: Response, next: NextFunction) => {
  const { name, amount } = req.body;
  const { error } = Joi.object({
    name: Joi.string().min(3).required(),
    amount: Joi.string().min(3).required(),
  }).validate({ name, amount });
  if (error) {
    const { type, message } = error.details[0];
    const statusCode = type === 'any.required' ? 400 : 422;
    return next({ code: statusCode, message });
  }
  next();
};

export default validateProduct;
