import { Router } from 'express';
import { startQuizController } from '../controllers/quizStart.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();


router.get('/:id/start', authenticate, startQuizController);

export default router;