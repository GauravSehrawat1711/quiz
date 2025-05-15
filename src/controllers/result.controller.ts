import {  Response } from 'express';
import {  getResultsByUser } from '../services/result.service';
import { sendResponse } from '../utils/sendResponse';

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
