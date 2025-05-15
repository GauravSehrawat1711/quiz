import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/auth.service';
import { sendResponse } from '../utils/sendResponse';

export const register = async (req: Request, res: Response): Promise<any> => {
  const { name, email, password, role } = req.body;

  try {
    await registerUser(name, email, password, role);
    return sendResponse({
      res,
      statusCode: 201,
      data: { message: 'User created successfully' },
    });
  } catch (err: any) {
    return sendResponse({
      res,
      statusCode: 400,
      error: err?.message || 'Registration failed',
    });
  }
};

export const login = async (req: Request, res: Response): Promise<any> => {
  const { email, password } = req.body;

  try {
    const result = await loginUser(email, password);
    return sendResponse({
      res,
      statusCode: 200,
      data: {
        message: 'Login successful',
        token: result.token,
      },
    });
  } catch (err: any) {
    return sendResponse({
      res,
      statusCode: 400,
      error: err.message || 'Login failed',
    });
  }
};
