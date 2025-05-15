// src/controllers/result.controller.ts
import { Request, Response } from 'express';
import { createResult, getResultById, getResultsByUser } from '../services/result.service';


export const createResultController = async (req: Request, res: Response) : Promise<any>=> {
  try {
    const { quizId, userId, score, correctAnswers, totalQuestions } = req.body;
    const result = await createResult(quizId, userId, score, correctAnswers, totalQuestions);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ message: 'Error creating result', error });
  }
};

export const getResultsByUserController = async (req: Request, res: Response) :Promise<any> => {
  try {
    const userId = req.params.userId;
    const results = await getResultsByUser(userId);
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching results', error });
  }
};

export const getResultByIdController = async (req: Request, res: Response) :Promise<any> => {
  try {
    const resultId = req.params.id;
    const result = await getResultById(resultId);
    if (!result) {
      return res.status(404).json({ message: 'Result not found' });
    }
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching result', error });
  }
};
