import { Request, Response } from 'express';

import { getClient } from './ClientHelper';
import { getClientProducts } from '../products/productHelper';

const getClientData = async (req: Request, res: Response) => {
  const { customerId } = req.query;

  const clientResult = await getClient(Number(customerId));
  const client = clientResult?.get();
  const products = await getClientProducts(Number(customerId));

  typeof client !== 'string' && typeof products !== 'string'
    ? res.send({ ...client, products })
    : res.sendStatus(400);
};

export default { getClientData };
