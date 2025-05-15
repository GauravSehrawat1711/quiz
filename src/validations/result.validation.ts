import Joi from 'joi';

export const createResultSchema = Joi.object({
  quizId: Joi.number().required(),
  score: Joi.number().min(0).required(),
  correctAnswers: Joi.number().min(0).required(),
  totalQuestions: Joi.number().min(1).required()
});
