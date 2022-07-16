import { IUser, IUserWithClasseAndLevel } from '../interfaces/User';
import connection from './connection';

const create = async (user: IUserWithClasseAndLevel) => {
  const { username, classe, level, password } = user;
  const query = `INSERT INTO Trybesmith.Users (username, classe, level, password)
  VALUES (?, ?, ?, ?)`;
  await connection.execute(query, [username, classe, level, password]);
};

const getByUsernameAndPw = async (user: IUser): Promise<IUserWithClasseAndLevel> => {
  const { username, password } = user;
  const query = 'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?';
  const [rows] = await connection.execute(query, [username, password]);
  const [userInfo] = rows as IUserWithClasseAndLevel[];
  return userInfo;
};

export default {
  create,
  getByUsernameAndPw,
};
