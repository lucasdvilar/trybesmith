import { ResultSetHeader } from 'mysql2';
import { IOrder } from '../interfaces/Order';
import connection from './connection';

const getAll = async (): Promise<IOrder[]> => {
  const [orders] = await connection.execute('SELECT * FROM Trybesmith.Orders');
  return orders as IOrder[];
};

const create = async (userId: number): Promise<number> => {
  const query = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';
  const [order] = await connection.execute<ResultSetHeader>(query, [userId]);
  return order.insertId;
};

export default {
  getAll,
  create,
};
