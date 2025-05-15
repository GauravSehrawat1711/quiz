
import { Router } from 'express';
import {  getResultsByUserController } from '../controllers/result.controller';
import { authenticate } from '../middlewares/auth.middleware';
import { authorizeRole } from '../middlewares/role.middleware';

const router = Router();
router.get('/', authenticate,authorizeRole('user'), getResultsByUserController);

export default router;
