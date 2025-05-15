import { Router } from 'express';
import authRoutes from './auth.route';
import quizRoutes from './quiz.route';
import questionRoutes from './question.route'
import resultRoutes from './result.route'
const router = Router();

router.use('/auth', authRoutes);
router.use('/quizzes', quizRoutes);
router.use('/question',resultRoutes)

export default router;
