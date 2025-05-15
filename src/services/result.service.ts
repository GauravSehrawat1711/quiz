// src/services/result.service.ts

import { getCustomRepository } from 'typeorm';
import { ResultRepository } from '../repositories/result.repository';

export const createResult = async (
  quizId: number,
  userId: number,
  score: number,
  correctAnswers: number,
  totalQuestions: number
) => {
  const resultRepository = getCustomRepository(ResultRepository);
  return await resultRepository.createResult(quizId, userId, score, correctAnswers, totalQuestions);
};

export const getResultsByUser = async (userId: string) => {
  const resultRepository = getCustomRepository(ResultRepository);
  return await resultRepository.getResultsByUser(Number(userId));
};

export const getResultById = async (resultId: string) => {
  const resultRepository = getCustomRepository(ResultRepository);
  return await resultRepository.getResultById(Number(resultId));
};
