import * as ResultRepo from '../repositories/result.repository';


export const getResultsByUser = async (userId: number | any) => {
  return await ResultRepo.getResultsByUser(userId);
};
