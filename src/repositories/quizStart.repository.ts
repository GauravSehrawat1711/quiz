import { AppDataSource } from '../config/data-source';
import { Quiz } from '../entities/Quiz';
import { Question } from '../entities/Question';
import { QuizSession } from '../entities/QuizSession';

const quizRepo = AppDataSource.getRepository(Quiz);
const questionRepo = AppDataSource.getRepository(Question);
const sessionRepo = AppDataSource.getRepository(QuizSession);

export const startQuiz = async (quizId: number, userId: number) => {
  const quiz = await quizRepo.findOneBy({ id: quizId });
  if (!quiz) return { error: 'Quiz not found' };

  const session = sessionRepo.create({ quizId, userId,isActive:true });
  await sessionRepo.save(session);

  const questions = await questionRepo.find({
    where: { quiz: { id: quizId } },
    select: ['id', 'question_text', 'options'],
  });

  return {
    quiz: {
      id: quiz.id,
      title: quiz.title,
      time_limit: quiz.time_limit,
    },
    questions,
    sessionId: session.id,
  };
};
