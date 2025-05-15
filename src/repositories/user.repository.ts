import { AppDataSource } from '../config/data-source';
import { User, UserRole } from '../entities/User';

const userRepository = AppDataSource.getRepository(User);

export const findUserByEmail = async (email: string) => {
  return userRepository.findOneBy({ email });
};

export const createUser = async (name: string, email: string, password: string, role :UserRole) => {
  const user = new User();
  user.name = name;
  user.email = email;
  user.password = password;
  user.role = role; 
  return userRepository.save(user);
};
