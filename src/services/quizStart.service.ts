import * as QuizStartRepo from '../repositories/quizStart.repository';

export const startQuiz = async (quizId: number, userId: number) => {
  return await QuizStartRepo.startQuiz(quizId, userId);
};
