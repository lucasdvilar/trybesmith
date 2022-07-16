import { Router } from 'express';
import validateLogin from '../middlewares/validateLogin';
import UserController from '../controllers/user';

const router = Router();

router.post('/', validateLogin, UserController.login);

export default router;
