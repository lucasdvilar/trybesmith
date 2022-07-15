import express from 'express';
import errorMiddleware from './middlewares/error';
import ProductsRoutes from './routes/products';

const app = express();

app.use(express.json());

app.use(ProductsRoutes);

app.use(errorMiddleware);

export default app;
