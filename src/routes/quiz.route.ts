
import { Router } from 'express';
import {
  createQuiz,
  updateQuiz,
  deleteQuiz,
  getAllQuizzes,
  getQuizById,
} from '../controllers/quiz.controller';
import { authenticate } from '../middlewares/auth.middleware';
import { authorizeRole } from '../middlewares/role.middleware';
import { createQuizSchema, updateQuizSchema } from '../validations/quiz.validation';
import { validate } from '../middlewares/validate';
import { startQuizController } from '../controllers/quizStart.controller';
import { submitQuiz } from '../controllers/quizAttempt.controller';

const router = Router();

router.post('/', authenticate, authorizeRole('admin'),validate(createQuizSchema), createQuiz);
router.put('/:id', authenticate, authorizeRole('admin'), validate(updateQuizSchema) ,updateQuiz);
router.delete('/:id', authenticate, authorizeRole('admin'), deleteQuiz);


router.get('/',authenticate, getAllQuizzes);
router.get('/:id',authenticate, getQuizById);

router.get('/:id/start', authenticate, authorizeRole('user'),startQuizController);
router.post('/:quizId/submit', authenticate, authorizeRole('user') , submitQuiz);

export default router;
