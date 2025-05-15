// src/repositories/question.repository.ts
import { AppDataSource } from '../config/data-source';
import { Question } from '../entities/Question';

export class QuestionRepository {
  private questionRepository = AppDataSource.getRepository(Question);

  // Create a new question
  public async createQuestion(questionData: {
    quizId: number;
    questionText: string;
    options: string[];
    correctAnswer: string;
  }) {
    const newQuestion = this.questionRepository.create(questionData);
    return await this.questionRepository.save(newQuestion);
  }

  // Update a question
  public async updateQuestion(id: number, questionData: {
    questionText: string;
    options: string[];
    correctAnswer: string;
  }) {
    const question = await this.questionRepository.findOneBy({ id });
    if (!question) return null;

    Object.assign(question, questionData);
    return await this.questionRepository.save(question);
  }

  // Delete a question
  public async deleteQuestion(id: number) {
    const question = await this.questionRepository.findOneBy({ id });
    if (!question) return null;

    await this.questionRepository.remove(question);
    return question;
  }

  // Get questions by quizId
  public async getQuestionsByQuizId(quizId: number) {
    return await this.questionRepository.find({ where: { id : quizId } });
  }
}
