import { Router } from 'express';
import UserController from '../controllers/user';
import validateUser from '../middlewares/validateUser';

const router = Router();

router.post('/', validateUser, UserController.create);

export default router;
