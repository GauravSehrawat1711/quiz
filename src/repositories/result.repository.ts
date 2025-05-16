import { AppDataSource } from '../config/data-source';
import { Quiz } from '../entities/Quiz';
import { Result } from '../entities/Result';
import { User } from '../entities/User';
import { QuizAttempt } from '../entities/QuizAttempts';
import { Question } from '../entities/Question';

const attemptRepo = AppDataSource.getRepository(QuizAttempt);
const questionRepo = AppDataSource.getRepository(Question);
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
  const results = await resultRepo.find({
    where: { user: { id: userId } },
    order: { createdAt: 'DESC' },
  });

  const allFeedbackResults = [];

  for (const result of results) {
    const sessionId = (result as any).sessionId;
    const attempts = await attemptRepo.find({
      where: { sessionId },
    });

    const questionIds = attempts.map(a => a.questionId);
    const questions = await questionRepo.findByIds(questionIds);
    const questionMap = new Map(questions.map(q => [q.id, q]));

    const feedback = attempts.map(attempt => {
      const question = questionMap.get(attempt.questionId);
      return {
        question: question?.question_text ?? '',
        selectedOption: question?.options[attempt.selectedIndex] ?? null,
        correctAnswer: question?.options[question.correct_option_index] ?? null,
        correct: attempt.isCorrect,
      };
    });

    allFeedbackResults.push({
      id: result.id,
      score: result.score,
      correctAnswers: result.correctAnswers,
      totalQuestions: result.totalQuestions,
      createdAt: result.createdAt,
      sessionId: (result as any).sessionId,
      feedback,
    });
  }

  return allFeedbackResults;
}
