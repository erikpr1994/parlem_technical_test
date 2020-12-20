import { ProductStatic, ProductModel } from '../models/productModel';

export default class ClientService {
  constructor(private ProductModel: ProductStatic) {
    ProductModel = this.ProductModel;
  }

  public async getProductsFromClient(clientId: number) {
    const query = {
      where: { customerId: clientId },
    };

    return await this.ProductModel.findAll<ProductModel>(query);
  }
}
