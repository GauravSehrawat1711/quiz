// src/routes/question.route.ts
import { Router } from 'express';
import {
  createQuestion,
  updateQuestion,
  deleteQuestion,
  getQuestionsByQuizId,
} from '../controllers/question.controller'
import { authenticate } from '../middlewares/auth.middleware';
import { authorizeRole } from '../middlewares/role.middleware';


const router = Router();

router.post('/:quizId', authenticate, authorizeRole('admin'), createQuestion);
router.put('/:id', authenticate, authorizeRole('admin'), updateQuestion);
router.delete('/:id', authenticate, authorizeRole('admin'), deleteQuestion);

// Public
router.get('/quiz/:quizId', getQuestionsByQuizId);

export default router;
