import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

export type UserRole = 'admin' | 'user';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string; 

  @Column()
  password!: string; 

  @Column({ type: 'enum', enum: ['admin', 'user'], default: 'user' })
  role!: UserRole;

  @CreateDateColumn()
  createdAt!: Date;
}
