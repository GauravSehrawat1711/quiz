import { AppDataSource } from '../config/data-source';
import { Question } from '../entities/Question';
import { Quiz } from '../entities/Quiz';
import { User } from '../entities/User';

const questionRepository = AppDataSource.getRepository(Question);
const quizRepository = AppDataSource.getRepository(Quiz);
const userRepository = AppDataSource.getRepository(User);

export const createQuestion = async (data: {
  quizId: number;
  question_text: string;
  options: string[];
  correct_option_index: number;
  userId: number;
}) => {
  const quiz = await quizRepository.findOneBy({ id: data.quizId });
  if (!quiz) return { error: 'Quiz not found' };

  const user = await userRepository.findOneBy({ id: data.userId });
  if (!user) return { error: 'User not found' };

  const question = questionRepository.create({
    question_text: data.question_text,
    options: data.options,
    correct_option_index: data.correct_option_index,
    quiz,
    user,
  });

  const saved = await questionRepository.save(question);
  const sanitized = {
    id: saved.id,
    question_text: saved.question_text,
    options: saved.options,
    correct_option_index: saved.correct_option_index,
    quizId: data.quizId,
    userId: data.userId,
    createdAt: saved.createdAt,
  };

  return {data: sanitized};
};



export const getQuestionsByQuizId = async (quizId: number) => {
  return await questionRepository.find({
    where: { quiz: { id: quizId } },
  });
};