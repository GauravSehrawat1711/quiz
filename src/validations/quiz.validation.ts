import Joi from 'joi';

export const createQuizSchema = Joi.object({
  title: Joi.string().min(3).required(),
  description: Joi.string().min(5).required(),
});

export const updateQuizSchema = Joi.object({
  title: Joi.string().min(3).optional(),
  description: Joi.string().min(5).optional(),
});
