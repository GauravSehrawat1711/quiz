
import { Request, Response } from 'express';
import  * as questionService  from '../services/question.service';
import { sendResponse } from '../utils/sendResponse';



export const createQuestion = async (req: any, res: Response): Promise<any> => {
  try {
    const { quizId } = req.params;
    const { question_text, options, correct_option_index } = req.body;
    const userId = req.user?.userId;

    const result = await questionService.createQuestion({
      quizId: Number(quizId),
      question_text,
      options,
      correct_option_index,
      userId,
    });

    if (result.error) {
      return sendResponse({
        res,
        statusCode: 400,
        error: result.error,
      });
    }

    return sendResponse({
      res,
      statusCode: 201,
      data: result?.data,
    });
  } catch (error: any) {
    return sendResponse({
      res,
      statusCode: 500,
      error: error.message || 'Failed to create question'
    });
  }
};

export const getQuestionsByQuizId = async (req: Request, res: Response)  : Promise<any>=> {
  try {
    const { quizId } = req.params;

    const questions = await questionService.getQuestionsByQuizId(Number(quizId));

    return res.status(200).json(questions);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching questions', error });
  }
};
