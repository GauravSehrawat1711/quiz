import { AppDataSource } from '../config/data-source';
import { Result } from '../entities/Result';

const resultRepo = AppDataSource.getRepository(Result);

export const createResult = async (
  quizId: number,
  userId: number,
  score: number,
  correctAnswers: number,
  totalQuestions: number
) => {
  const result = resultRepo.create({
    user: { id: userId },
    quiz: { id: quizId },
    score,
    correctAnswers,
    totalQuestions,
  });

  return await resultRepo.save(result);
};

export const getResultsByUser = async (userId: number) => {
  return await resultRepo.find({
    where: { user: { id: userId } }, 
    order: { createdAt: 'DESC' },
  });
};
