import generateToken from '../helpers/jwt';
import IUser from '../interfaces/User';
import UserModel from '../models/user';

const create = async (user: IUser): Promise<string> => {
  const { username, password } = user;
  await UserModel.create(user);
  return generateToken(username, password);
};

export default {
  create,
};
