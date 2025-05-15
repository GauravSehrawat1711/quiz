import * as QuestionRepo from '../repositories/question.repository';

export const createQuestion = async (data: {
  quizId: number;
  question_text: string;
  options: string[];
  correct_option_index: number;
  userId: number;
}) => {
  return await QuestionRepo.createQuestion(data);
};



export const getQuestionsByQuizId = async (quizId: number) => {
  return await QuestionRepo.getQuestionsByQuizId(quizId);
};