import express from 'express';

import cors from 'cors';
import routes from '../api';

export default async ({ app }: { app: express.Application }) => {
  app.use(cors());

  app.use(express.json());

  app.use(routes());
};
