// src/routes/result.route.ts
import { Router } from 'express';
import { createResultController, getResultsByUserController, getResultByIdController } from '../controllers/result.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.post('/', authenticate, createResultController);

router.get('/user/:userId', authenticate, getResultsByUserController);
router.get('/:id', authenticate, getResultByIdController);

export default router;
