import IUser from '../interfaces/User';
import connection from './connection';

const create = async (user: IUser) => {
  const { username, classe, level, password } = user;
  const query = `INSERT INTO Trybesmith.Users (username, classe, level, password)
  VALUES (?, ?, ?, ?)`;
  await connection.execute(query, [username, classe, level, password]);
};

export default {
  create,
};
