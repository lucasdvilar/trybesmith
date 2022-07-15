import { Router } from 'express';
import ProductController from '../controllers/product';
import validateProduct from '../middlewares/validateProduct';

const router = Router();

router.get('/', ProductController.getAll);
router.post('/', validateProduct, ProductController.create);

export default router;
