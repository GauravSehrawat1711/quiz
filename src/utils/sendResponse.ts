import { Response } from 'express';

export interface IResponse {
  res: Response;
  statusCode: number;
  data?: any;
  error?: any;
}

export const sendResponse = ({ res, statusCode, data = null, error = null }: IResponse) => {
  return res.status(statusCode).json({
    data: error ? null : data,
    status: statusCode,
    error,
    timestamp: new Date().toISOString(),
  });
};
