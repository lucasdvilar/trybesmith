import { Router } from 'express';
import ProductController from '../controllers/product';

const router = Router();

router.get('/products', ProductController.getAll);

export default router;
