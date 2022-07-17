import { Router } from 'express';
import OrderController from '../controllers/order';
import auth from '../middlewares/auth';
import validateOrder from '../middlewares/validateOrder';

const router = Router();

router.get('/', OrderController.getAll);
router.post('/', auth, validateOrder, OrderController.create);

export default router;
