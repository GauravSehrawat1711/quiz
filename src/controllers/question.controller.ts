
import { Request, Response } from 'express';
import { QuestionService } from '../services/question.service';

const questionService = new QuestionService();

export const createQuestion = async (req: Request, res: Response) : Promise<any> => {
  try {
    const { quizId } = req.params;
    const { questionText, options, correctAnswer } = req.body;
    
    const newQuestion = await questionService.createQuestion({
      quizId: Number(quizId),
      questionText,
      options,
      correctAnswer
    });

    return res.status(201).json(newQuestion);
  } catch (error) {
    return res.status(500).json({ message: 'Error creating question', error });
  }
};

export const updateQuestion = async (req: Request, res: Response)  : Promise<any>=> {
  try {
    const { id } = req.params;
    const { questionText, options, correctAnswer } = req.body;

    const updatedQuestion = await questionService.updateQuestion(Number(id), {
      questionText,
      options,
      correctAnswer
    });

    if (!updatedQuestion) {
      return res.status(404).json({ message: 'Question not found' });
    }

    return res.status(200).json(updatedQuestion);
  } catch (error) {
    return res.status(500).json({ message: 'Error updating question', error });
  }
};


export const deleteQuestion = async (req: Request, res: Response) : Promise<any> => {
  try {
    const { id } = req.params;

    const deletedQuestion = await questionService.deleteQuestion(Number(id));

    if (!deletedQuestion) {
      return res.status(404).json({ message: 'Question not found' });
    }

    return res.status(200).json({ message: 'Question deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting question', error });
  }
};


export const getQuestionsByQuizId = async (req: Request, res: Response)  : Promise<any>=> {
  try {
    const { quizId } = req.params;

    const questions = await questionService.getQuestionsByQuizId(Number(quizId));

    return res.status(200).json(questions);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching questions', error });
  }
};
