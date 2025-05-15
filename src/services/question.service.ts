// src/services/question.service.ts
import { QuestionRepository } from '../repositories/question.repository';

export class QuestionService {
  private questionRepository = new QuestionRepository();

  // Create a new question
  public async createQuestion(questionData: {
    quizId: number;
    questionText: string;
    options: string[];
    correctAnswer: string;
  }) {
    return await this.questionRepository.createQuestion(questionData);
  }

  // Update a question
  public async updateQuestion(id: number, questionData: {
    questionText: string;
    options: string[];
    correctAnswer: string;
  }) {
    return await this.questionRepository.updateQuestion(id, questionData);
  }

  // Delete a question
  public async deleteQuestion(id: number) {
    return await this.questionRepository.deleteQuestion(id);
  }

  // Get questions by quizId
  public async getQuestionsByQuizId(quizId: number) {
    return await this.questionRepository.getQuestionsByQuizId(quizId);
  }
}
