import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { sendResponse } from '../utils/sendResponse';

export const authenticate = (req: Request, res: Response, next: NextFunction) :any => {
  const token = req.header('Authorization')?.replace('Bearer ', ''); 

  if (!token) {
    return sendResponse({res,statusCode :401,data :null,error :{message: 'Access denied. No token provided.'} })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_secret_key') as { userId: number; role: string };   
    (req as any).user = decoded;
    next(); 
  } catch (err) {
    return sendResponse({res,statusCode :401,data :null,error :{message: 'Access denied'} })
  }
};
