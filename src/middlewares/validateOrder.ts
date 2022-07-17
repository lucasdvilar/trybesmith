import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const validateOrder = async (req: Request, _res: Response, next: NextFunction) => {
  const { productsIds } = req.body;
  const { error } = Joi.object({
    productsIds: Joi.array().items(Joi.number().required()).required()
      .messages({ 'array.includesRequiredUnknowns': '"productsIds" must include only numbers' }),
  }).validate({ productsIds });
  if (error) {
    const { type, message } = error.details[0];
    const statusCode = type === 'any.required' ? 400 : 422;
    return next({ code: statusCode, message });
  }
  next();
};

export default validateOrder;
