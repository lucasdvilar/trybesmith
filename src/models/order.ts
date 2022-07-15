import IOrder from '../interfaces/Order';
import connection from './connection';

const getAll = async (): Promise<IOrder[]> => {
  const [orders] = await connection.execute('SELECT * FROM Trybesmith.Orders');
  return orders as IOrder[];
};

export default {
  getAll,
};
