import { Client } from '../database';

export const getClient = async (customerId: number) => {
  try {
    return await Client.findByPk(customerId);
  } catch (error) {
    return error.message;
  }
};
