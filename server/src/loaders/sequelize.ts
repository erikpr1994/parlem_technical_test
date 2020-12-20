import { Sequelize } from 'sequelize';

import { config } from 'dotenv';

config();

const dbName: string = process.env.POSTGRES_DB || '';
const dbUser: string = process.env.POSTGRES_USER || '';
const dbPassword: string = process.env.POSTGRES_PASSWORD || '';

export default async (): Promise<Sequelize> => {
  const database = new Sequelize(dbName, dbUser, dbPassword, {
    port: Number(process.env.DB_PORT),
    host: process.env.DB_HOST,
    dialect: 'postgres',
    pool: {
      min: 0,
      max: 5,
      acquire: 3000,
      idle: 1000,
    },
    logging: false,
  });

  return database;
};
