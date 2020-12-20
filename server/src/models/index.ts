import { ClientFactory } from './clientModel';
import { ProductFactory } from './productModel';

import databaseLoader from '../loaders/sequelize';

export default async () => {
  const database = await databaseLoader();

  const db = {
    client: ClientFactory(database),
    product: ProductFactory(database),
  };

  db.client.hasMany(db.product, { foreignKey: 'customerId' });

  return db;
};
