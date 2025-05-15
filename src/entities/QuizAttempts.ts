
import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    Column,
    CreateDateColumn,
    JoinColumn,
  } from 'typeorm';
  import { Question } from './Question';
  import { QuizSession } from './QuizSession';
  
  @Entity()
  export class QuizAttempt {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @ManyToOne(() => QuizSession, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'sessionId' })
    session!: QuizSession;
  
    @Column()
    sessionId!: number;
  
    @ManyToOne(() => Question, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'questionId' })
    question!: Question;
  
    @Column()
    questionId!: number;
  
    @Column()
    selectedIndex!: number;
  
    @Column()
    isCorrect!: boolean;
  
    @CreateDateColumn()
    answeredAt!: Date;
  }
  