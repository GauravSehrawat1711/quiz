
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, CreateDateColumn } from 'typeorm';
import { Quiz } from './Quiz';
import { User } from './User';

@Entity()
export class Result {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user)
  user!: User;

  @ManyToOne(() => Quiz, (quiz) => quiz.results)
  quiz!: Quiz;

  @Column('int')
  score!: number; 

  @Column('int')
  correctAnswers!: number; 

  @Column('int')
  totalQuestions!: number; 

  @CreateDateColumn()
  createdAt!: Date;
}
