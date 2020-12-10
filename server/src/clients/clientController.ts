import { Request, Response } from 'express';

import { getClient } from './ClientHelper';
import { getClientProducts } from '../products/productHelper';

const getClientData = async (req: Request, res: Response) => {
  const { id } = req.params;

  const clientResult = await getClient(Number(id));
  const client = clientResult?.get();
  const products = await getClientProducts(Number(id));

  typeof client !== 'string' && typeof products !== 'string'
    ? res.send({ ...client, products })
    : res.sendStatus(400);
};

export default { getClientData };
