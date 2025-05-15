import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Quiz } from './Quiz'; 

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

  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  quiz!: Quiz;

  @CreateDateColumn()
  createdAt!: Date;
}
