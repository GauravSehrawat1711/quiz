import { Request, Response } from 'express';
import * as QuizAttemptService from '../services/quizAttempt.service';
import { sendResponse } from '../utils/sendResponse';

export const submitQuiz = async (req: any, res: Response): Promise<any> => {
  try {
    const quizId = Number(req.params.quizId);
    const userId = req.user?.userId;
    const { answers } = req.body; 

    const result = await QuizAttemptService.submitQuiz(quizId, userId, answers);

    if (result.error) {
      return sendResponse({
        res,
        statusCode: 400,
        error: result.error,
      });
    }

    return sendResponse({
      res,
      statusCode: 200,
      data: result,
    });
  } catch (error: any) {
    return sendResponse({
      res,
      statusCode: 500,
      error: error.message || 'Failed to submit quiz',
    });
  }
};
