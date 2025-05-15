import {  Response } from 'express';
import { startQuiz } from '../services/quizStart.service';
import { sendResponse } from '../utils/sendResponse';

export const startQuizController = async (req: any, res: Response) :Promise<any>=> {
  try {
    const quizId = Number(req.params.id);
    const userId = req.user?.userId;

    const result = await startQuiz(quizId, userId);

    if (result.error) {
      return sendResponse({ res, statusCode: 404, error: result.error });
    }

    return sendResponse({ res, statusCode: 200, data: result });
  } catch (error: any) {
    return sendResponse({
      res,
      statusCode: 500,
      error: error.message || 'Failed to start quiz',
    });
  }
};
