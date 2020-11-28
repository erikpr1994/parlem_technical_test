import Express, { json } from 'express';
import { config } from 'dotenv';
import cors from 'cors';

config();

const { PORT } = process.env;

const app = Express();

app.use(cors());
app.use(json());

app.listen(PORT);
