import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Question } from './Question';
import { Result } from './Result'; 
import { User } from './User';

@Entity()
export class Quiz {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column('text')
  description!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @Column()
  userId!: number; 

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' }) 
  user!: User;

  @OneToMany(() => Question, (question) => question.quiz)
  questions!: Question[];

  @OneToMany(() => Result, (result) => result.quiz) 
  results!: Result[]; 
}
