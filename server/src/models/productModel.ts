import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';
import { Iproduct } from '../interfaces/Iproduct';

export interface ProductModel extends Model<Iproduct>, Iproduct {}

export class Product extends Model<ProductModel, Iproduct> {}

export type ProductStatic = typeof Model & {
  new (Values?: object, options?: BuildOptions): ProductModel;
};

export function ProductFactory(sequelize: Sequelize): ProductStatic {
  return <ProductStatic>sequelize.define('products', {
    _id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    productName: {
      type: DataTypes.STRING,
    },
    productTypeName: {
      type: DataTypes.STRING,
    },
    numeracioTerminal: {
      type: DataTypes.INTEGER,
    },
    soldAt: {
      type: DataTypes.DATE,
    },
  });
}
