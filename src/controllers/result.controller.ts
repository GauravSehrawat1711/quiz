import {  Response } from 'express';
import { createResult, getResultsByUser } from '../services/result.service';
import { sendResponse } from '../utils/sendResponse';

export const createResultController = async (req: any, res: Response): Promise<any> => {
  try {
    const { quizId, score, correctAnswers, totalQuestions } = req.body;
    const userId = req.user?.userId;

    const result = await createResult(quizId, userId, score, correctAnswers, totalQuestions);

    return sendResponse({
      res,
      statusCode: 201,
      data: result,
    });
  } catch (error: any) {
    return sendResponse({
      res,
      statusCode: 500,
      error: error.message || 'Error creating result',
    });
  }
};

export const getResultsByUserController = async (req: any, res: Response): Promise<any> => {
  try {
    const userId = req.user?.userId;
    const results = await getResultsByUser(userId);

    return sendResponse({
      res,
      statusCode: 200,
      data: results,
    });
  } catch (error: any) {
    return sendResponse({
      res,
      statusCode: 500,
      error: error.message || 'Error fetching results',
    });
  }
};
