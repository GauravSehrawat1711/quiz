import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  JoinColumn,
} from 'typeorm';
import { Quiz } from './Quiz';
import { User } from './User';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('text')
  question_text!: string;

  @Column('json')
  options!: string[]; 

  @Column()
  correct_option_index!: number;

  @ManyToOne(() => Quiz, (quiz) => quiz.questions, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'quizId' })
  quiz!: Quiz;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user!: User;

  @CreateDateColumn()
  createdAt!: Date;
}
