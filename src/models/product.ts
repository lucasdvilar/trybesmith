import { ResultSetHeader } from 'mysql2';
import IProduct from '../interfaces/Product';
import connection from './connection';

const getAll = async (): Promise<IProduct[]> => {
  const [products] = await connection.execute('SELECT * FROM Trybesmith.Products');
  return products as IProduct[];
};

const create = async (product: IProduct): Promise<IProduct> => {
  const { name, amount } = product;
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  const [createdProduct] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  return { id: createdProduct.insertId, ...product };
};

export default {
  getAll,
  create,
};
