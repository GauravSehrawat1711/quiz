
import { AppDataSource } from '../config/data-source';
import { Quiz } from '../entities/Quiz';

const quizRepo = AppDataSource.getRepository(Quiz);

export const createQuiz = (data: Partial<Quiz>) => {
  const quiz = quizRepo.create(data);
  return quizRepo.save(quiz);
};

export const updateQuiz = async (id: number, data: Partial<Quiz>) => {
  await quizRepo.update(id, data);
  return quizRepo.findOneBy({ id });
};

export const deleteQuiz = (id: number) => {
  return quizRepo.delete(id);
};

export const getAllQuizzes = () => {
  return quizRepo.find();
};

export const getQuizById = (id: number) => {
  return quizRepo.findOne({
    where: { id }
  });
};
