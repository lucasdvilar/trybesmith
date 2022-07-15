import express from 'express';
import ProductsRoutes from './routes/products';

const app = express();

app.use(express.json());

app.use(ProductsRoutes);

export default app;
