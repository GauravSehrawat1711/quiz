
import { Router } from 'express';
import {
  createQuestion,
  getQuestionsByQuizId,
} from '../controllers/question.controller'
import { authenticate } from '../middlewares/auth.middleware';
import { authorizeRole } from '../middlewares/role.middleware';
import { createQuestionSchema } from '../validations/question.validation';
import { validate } from '../middlewares/validate';


const router = Router();

router.post('/:quizId', authenticate, authorizeRole('admin'),validate(createQuestionSchema), createQuestion);
router.get('/quiz/:quizId',authenticate, getQuestionsByQuizId);

export default router;
