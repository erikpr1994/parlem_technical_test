import { Request, Response, Router } from 'express';

import models from '../../models';

import ProductService from '../../services/product';

const route = Router();

export default (app: Router) => {
  app.use('/product', route);

  route.get('/:userId', async (req: Request, res: Response) => {
    try {
      const { product } = await models();

      const productServiceInstance = new ProductService(product);

      const user = await productServiceInstance.getProductsFromClient(
        Number(req.params.userId)
      );

      return res.json(user).status(200);
    } catch (e) {
      res.json(e).status(404);
    }
  });
};
