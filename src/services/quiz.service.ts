
import * as QuizRepo from '../repositories/quiz.repository';

export const createQuiz = (data: { title: string; description?: string , userId? : any ,time_limit :number }) => {
  return QuizRepo.createQuiz(data);
};

export const updateQuiz = (id: number, data: { title?: string; description?: string, time_limit :number }) => {
  return QuizRepo.updateQuiz(id, data);
};

export const deleteQuiz = (id: number) => {
  return QuizRepo.deleteQuiz(id);
};

export const getAllQuizzes = () => {
  return QuizRepo.getAllQuizzes();
};

export const getQuizById = (id: number) => {
  return QuizRepo.getQuizById(id);
};
