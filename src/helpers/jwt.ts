import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'segredo'; // ?

const generateToken = (username: string, password: string) => 
  jwt.sign({ username, password }, SECRET);

export default generateToken;
