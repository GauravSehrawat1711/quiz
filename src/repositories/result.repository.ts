
import {  Repository } from 'typeorm';
import { Result } from '../entities/Result';

export class ResultRepository extends Repository<Result> {


  async createResult(quizId: number, userId: number, score: number, correctAnswers: number, totalQuestions: number) {
    const result = this.create({
      user: { id: userId },
      quiz: { id: quizId },
      score,
      correctAnswers,
      totalQuestions,
    });
    return this.save(result);
  }

  async getResultsByUser(userId: number) {
    return this.find({ where: { user: { id: userId } } });
  }

  async getResultById(resultId: number) {
    return this.findOne({ where: { id: resultId } });
  }
}
