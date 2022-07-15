import { Router } from 'express';
import OrderController from '../controllers/order';

const router = Router();

router.get('/', OrderController.getAll);

export default router;