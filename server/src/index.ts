import Express, { json } from 'express';
import { config } from 'dotenv';
import cors from 'cors';

import router from './router';

import { database } from './models';

config();

const { PORT } = process.env;

const app = Express();

app.use(cors());
app.use(json());
app.use(router);

database
  .authenticate()
  .then(() => app.listen(PORT))
  .catch((error) => {
    throw new Error(error);
  });
