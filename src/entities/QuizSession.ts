import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    Column,
    CreateDateColumn,
    JoinColumn,
  } from 'typeorm';
  import { User } from './User';
  import { Quiz } from './Quiz';
  
  @Entity()
  export class QuizSession {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Column()
    userId!: number;
  
    @Column()
    quizId!: number;
  
    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'userId' })
    user!: User;
  
    @ManyToOne(() => Quiz, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'quizId' })
    quiz!: Quiz;
  
    @CreateDateColumn()
    startedAt!: Date;
  }
  