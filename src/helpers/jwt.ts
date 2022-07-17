import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/User';

const SECRET = 'segredo';

export const generateToken = (user: IUser) => 
  jwt.sign(user, SECRET);

export const decodeToken = (token: string) => jwt.verify(token, SECRET);
