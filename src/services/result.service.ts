import * as ResultRepo from '../repositories/result.repository';

export const createResult = async (
  quizId: number,
  userId: number | any,
  score: number,
  correctAnswers: number,
  totalQuestions: number
) => {
  return await ResultRepo.createResult(quizId, userId, score, correctAnswers, totalQuestions);
};

export const getResultsByUser = async (userId: number | any) => {
  return await ResultRepo.getResultsByUser(userId);
};
