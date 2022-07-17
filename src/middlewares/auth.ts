import { NextFunction, Request, Response } from 'express';
import { decodeToken } from '../helpers/jwt';
import IUserInfoJwtPayload from '../interfaces/JwtPayload';

const auth = (req: Request, _res: Response, next: NextFunction) => {
  const CODE = 401;
  try {
    const token = req.headers.authorization;
    if (!token) return next({ code: CODE, message: 'Token not found' });
    const userInfo = decodeToken(token) as IUserInfoJwtPayload;
    const userId = userInfo.id;
    req.body.userId = userId;
    next();
  } catch (err) {
    return next({ code: CODE, message: 'Invalid token' });
  }
};

export default auth;
