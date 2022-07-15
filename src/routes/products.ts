import { Router } from 'express';
import ProductController from '../controllers/product';
import validateProduct from '../middlewares/validateProduct';

const router = Router();

router.get('/products', ProductController.getAll);
router.post('/products', validateProduct, ProductController.create);

export default router;
