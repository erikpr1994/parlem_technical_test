import Express, { json } from 'express';
import { config } from 'dotenv';
import cors from 'cors';

import router from './router';

config();

const { PORT } = process.env;

const app = Express();

app.use(cors());
app.use(json());
app.use(router);

app.listen(PORT);
