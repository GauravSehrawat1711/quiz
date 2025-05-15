import Joi from 'joi';

export const createQuestionSchema = Joi.object({
  question_text: Joi.string().min(5).required(),
  options: Joi.array().items(Joi.string()).length(4).required(),
  correct_option_index: Joi.number().min(0).max(3).required()
});