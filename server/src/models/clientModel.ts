import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';
import { Iclient } from '../interfaces/Iclient';

export interface ClientModel extends Model<Iclient>, Iclient {}

export class Client extends Model<ClientModel, Iclient> {}

export type ClientStatic = typeof Model & {
  new (Values?: object, options?: BuildOptions): ClientModel;
};

export function ClientFactory(sequelize: Sequelize): ClientStatic {
  return sequelize.define('clients', {
    _id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    customerId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    docType: {
      type: DataTypes.STRING,
    },
    docNum: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    givenName: {
      type: DataTypes.STRING,
    },
    familyName1: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.INTEGER,
    },
  });
}
