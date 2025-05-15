import { Request, Response } from 'express';
import * as QuizService from '../services/quiz.service';
import { IResponse, sendResponse } from '../utils/sendResponse';

export const createQuiz = async (req: any, res: Response)  : Promise<any>=> {
  const { title, description , time_limit} = req.body;
  const { userId } = req.user;

  try {
    const quiz = await QuizService.createQuiz({ title, description, userId ,time_limit});
    return sendResponse({
      res,
      statusCode: 201,
      data: quiz,
    });
  } catch (err: any) {
    return sendResponse({
      res,
      statusCode: 400,
      error: err.message || 'Quiz creation failed',
    });
  }
};

export const updateQuiz = async (req: Request, res: Response) : Promise<any>=> {
  const { id } = req.params;

  try {
    const quiz = await QuizService.updateQuiz(Number(id), req.body);
    return sendResponse({
      res,
      statusCode: 200,
      data: quiz,
    });
  } catch (err: any) {
    return sendResponse({
      res,
      statusCode: 400,
      error: err.message || 'Quiz update failed',
    });
  }
};

export const deleteQuiz = async (req: Request, res: Response) : Promise<any>=> {
  const { id } = req.params;

  try {
    await QuizService.deleteQuiz(Number(id));
    return sendResponse({
      res,
      statusCode: 200,
      data: { message: 'Quiz deleted successfully' },
    });
  } catch (err: any) {
    return sendResponse({
      res,
      statusCode: 400,
      error: err.message || 'Quiz deletion failed',
    });
  }
};

export const getAllQuizzes = async (_req: Request, res: Response) : Promise<any> => {
  try {
    const quizzes = await QuizService.getAllQuizzes();
    return sendResponse({
      res,
      statusCode: 200,
      data: quizzes,
    });
  } catch (err: any) {
    return sendResponse({
      res,
      statusCode: 500,
      error: err.message || 'Failed to fetch quizzes',
    });
  }
};

export const getQuizById = async (req: Request, res: Response) : Promise<any> => {
  const { id } = req.params;

  try {
    const quiz = await QuizService.getQuizById(Number(id));
    return sendResponse({
      res,
      statusCode: 200,
      data: quiz,
    });
  } catch (err: any) {
    return sendResponse({
      res,
      statusCode: 404,
      error: 'Quiz not found',
    });
  }
};
