import models from '../models';
import { ClientModel } from '../models/clientModel';
import { ProductModel } from '../models/productModel';

import dbLoader from '../loaders/sequelize';

async function createData() {
  try {
    const database = await dbLoader();
    const { client, product } = await models();
    database
      .sync({ force: true })
      .then(async () => {
        await client.findOrCreate<ClientModel>({
          where: {
            docType: 'nif',
            docNum: '11223344E',
            email: 'it@parlem.com',
            customerId: '11111',
            givenName: 'Enriqueta',
            familyName1: 'Parlem',
            phone: '668668668',
          },
        });

        await client.findOrCreate<ClientModel>({
          where: {
            docType: 'nif',
            docNum: '55667788E',
            email: 'at@parlem.com',
            customerId: '22222',
            givenName: 'Albertito',
            familyName1: 'Parlem',
            phone: '789321654',
          },
        });

        await product.findOrCreate<ProductModel>({
          where: {
            productName: 'FIBRA 1000 ADAMO',
            productTypeName: 'ftth',
            numeracioTerminal: 933933933,
            soldAt: '2019-01-09 14:26:17',
            customerId: '11111',
          },
        });

        await product.findOrCreate<ProductModel>({
          where: {
            productName: 'MÒBIL ILIMITAT',
            productTypeName: 'telefonia',
            numeracioTerminal: 668668668,
            soldAt: '2019-01-09 14:26:17',
            customerId: '11111',
          },
        });

        await product.findOrCreate<ProductModel>({
          where: {
            productName: 'MÒBIL ILIMITAT',
            productTypeName: 'telefonia',
            numeracioTerminal: 789321654,
            soldAt: '2019-01-09 14:26:17',
            customerId: '22222',
          },
        });
      })
      .catch((error) => {
        throw new Error(error);
      });
  } catch (error) {
    throw new Error(error);
  }
}

createData();
