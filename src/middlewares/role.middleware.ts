
import { Request, Response, NextFunction } from 'express';
import { sendResponse } from '../utils/sendResponse';

export const authorizeRole = (role: 'admin' | 'user') => {
  return (req: any, res: Response, next: NextFunction): any | void => {
    const user = req.user;

    if (!user || user.role !== role) {
      return sendResponse({res,statusCode :403,data :null,error :{message: 'Forbidden: Insufficient permissions'} })
    }

    next();
  };
};
