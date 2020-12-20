import { Router } from 'express';
import client from './routes/client';
import product from './routes/product';

export default () => {
  const app = Router();
  client(app);
  product(app);

  return app;
};
