import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const validateUser = async (req: Request, _res: Response, next: NextFunction) => {
  const { username, classe, level, password } = req.body;
  const { error } = Joi.object({
    username: Joi.string().min(3).required(),
    classe: Joi.string().min(3).required(),
    level: Joi.number().min(1).required(),
    password: Joi.string().min(8).required(),
  }).validate({ username, classe, level, password });
  if (error) {
    const { type, message } = error.details[0];
    const statusCode = type === 'any.required' ? 400 : 422;
    return next({ code: statusCode, message });
  }
  next();
};

export default validateUser;
