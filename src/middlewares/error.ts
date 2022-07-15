import { NextFunction, Request, Response } from 'express';
import IValidationError from '../interfaces/ValidationError';

const error = (err: IValidationError, _req: Request, res: Response, _next: NextFunction) => {
  if (err.code && err.message) {
    return res.status(err.code).json({ message: err.message });
  }
};

export default error;
