import { database, Client, Product } from '../database';
import { ClientModel } from '../clients/clientModel';
import { ProductModel } from '../products/productModel';

function createData() {
  try {
    database
      .sync({ force: true })
      .then(() => {
        Client.findOrCreate<ClientModel>({
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

        Product.findOrCreate<ProductModel>({
          where: {
            productName: 'FIBRA 1000 ADAMO',
            productTypeName: 'ftth',
            numeracioTerminal: 933933933,
            soldAt: '2019-01-09 14:26:17',
            customerId: '11111',
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
