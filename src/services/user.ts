import generateToken from '../helpers/jwt';
import { IUser, IUserWithClasseAndLevel } from '../interfaces/User';
import ValidationError from '../interfaces/ValidationError';
import UserModel from '../models/user';

const create = async (user: IUserWithClasseAndLevel): Promise<string> => {
  const { username, password } = user;
  await UserModel.create(user);
  return generateToken(username, password);
};

const login = async (user: IUser): Promise<ValidationError | string> => {
  const { username, password } = user;
  const userInfo = await UserModel.getByUsernameAndPw(user);
  if (!userInfo) return { code: 401, message: 'Username or password invalid' };
  return generateToken(username, password);
};

export default {
  create,
  login,
};
