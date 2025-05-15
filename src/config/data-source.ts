import { DataSource } from 'typeorm';
import { User } from '../entities/User';
import { Quiz } from '../entities/Quiz';
import { Question } from '../entities/Question';
import { Result } from '../entities/Result';
import dotenv from 'dotenv';
dotenv.config();
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'quiz_db',
  synchronize: true,
  logging: false,
  entities: [User, Quiz, Question, Result],
});
