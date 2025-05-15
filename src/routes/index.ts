import { Router } from 'express';
import authRoutes from './auth.route';
import quizRoutes from './quiz.route';
import questionRoutes from './question.route'
import result from './result.route'
import quizStart from './quizStart.routes'
const router = Router();

router.use('/auth', authRoutes);
router.use('/quizzes', quizRoutes);
router.use('/questions',questionRoutes)
router.use('/results',result)
router.use('/quizzes',quizStart)

export default router;
