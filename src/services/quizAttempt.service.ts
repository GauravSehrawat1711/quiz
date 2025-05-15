import * as QuizAttemptRepo from '../repositories/quizAttempt.repository';

export const submitQuiz = async (
  quizId: number,
  userId: number,
  answers: { questionId: number; selectedIndex: number }[]
) => {
  return await QuizAttemptRepo.submitQuiz(quizId, userId, answers);
};
