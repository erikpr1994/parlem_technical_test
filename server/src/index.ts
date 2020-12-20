import Express from 'express';

import { config } from 'dotenv';

async function startServer() {
  config();
  const { PORT } = process.env;

  const app = Express();
  await require('./loaders').default({ expressApp: app });

  app.listen(PORT, () => {});
}

startServer();
