import { Product } from '../database';
import { ProductModel } from './productModel';

export const getClientProducts = async (customerId: number) => {
  const query = {
    where: { customerId },
  };

  try {
    return await Product.findAll<ProductModel>(query);
  } catch (error) {
    return error.message;
  }
};
