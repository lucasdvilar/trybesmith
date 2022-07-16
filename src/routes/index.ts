import { Router } from 'express';
import productsRouter from './products';
import usersRouter from './users';
import ordersRouter from './orders';
import loginRouter from './login';

const router = Router();

router.use('/products', productsRouter);
router.use('/users', usersRouter);
router.use('/orders', ordersRouter);
router.use('/login', loginRouter);

export default router;
