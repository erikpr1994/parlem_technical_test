import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

export interface ProductAttributes {
  _id: number;
  productName: string;
  productTypeName: string;
  numeracioTerminal: number;
  customerId: number;
  soldAt: Date;
}

export interface ProductModel
  extends Model<ProductAttributes>,
    ProductAttributes {}

export class Product extends Model<ProductModel, ProductAttributes> {}

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
