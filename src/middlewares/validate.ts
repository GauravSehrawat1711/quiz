import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';

export const validate =
  (schema: ObjectSchema) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      res.status(400).json({
        data: null,
        status: 'error',
        error: error.details.map((d) => d.message),
        timestamp: new Date().toISOString(),
      });
      return; 
    }

    next(); 
  };
