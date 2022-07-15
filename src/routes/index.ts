import { Router } from 'express';
import productsRouter from './products';
import usersRouter from './users';

const router = Router();

router.use('/products', productsRouter);
router.use('/users', usersRouter);

export default router;
