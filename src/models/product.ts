import IProduct from '../interfaces/Product';
import connection from './connection';

const getAll = async (): Promise<IProduct[]> => {
  const [products] = await connection.execute('SELECT * FROM Trybesmith.Products');
  return products as IProduct[];
};

export default {
  getAll,
};
