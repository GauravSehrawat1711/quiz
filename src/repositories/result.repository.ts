import { AppDataSource } from '../config/data-source';
import { Quiz } from '../entities/Quiz';
import { Result } from '../entities/Result';
import { User } from '../entities/User';

const resultRepo = AppDataSource.getRepository(Result);
const quizRepository = AppDataSource.getRepository(Quiz);
const userRepository = AppDataSource.getRepository(User);
export const createResult = async (
  quizId: number,
  userId: number,
  score: number,
  correctAnswers: number,
  totalQuestions: number
) => {
  const quiz = await quizRepository.findOneBy({ id: quizId });
  if (!quiz) return { error: 'Quiz not found' };

  const user = await userRepository.findOneBy({ id: userId });
  if (!user) return { error: 'User not found' };

  const result = resultRepo.create({
    user: { id: userId },
    quiz: { id: quizId },
    score,
    correctAnswers,
    totalQuestions,
  });

  await resultRepo.save(result);
  return {result}
};

export const getResultsByUser = async (userId: number) => {
  return await resultRepo.find({
    where: { user: { id: userId } }, 
    order: { createdAt: 'DESC' },
  });
};
