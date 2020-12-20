import expressLoader from './express';
import sequelizeLoader from './sequelize';

import express from 'express';

export default async ({ expressApp }: { expressApp: express.Application }) => {
  await sequelizeLoader();

  await expressLoader({ app: expressApp });
};
