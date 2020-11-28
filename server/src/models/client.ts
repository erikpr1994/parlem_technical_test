import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

export interface ClientAttributes {
  _id: number;
  customerId: number;
  docType: string;
  docNum: string;
  email: string;
  givenName: string;
  familyName1: string;
  phone: number;
}

export interface ClientModel
  extends Model<ClientAttributes>,
    ClientAttributes {}

export class Client extends Model<ClientModel, ClientAttributes> {}

export type ClientStatic = typeof Model & {
  new (Values?: object, options?: BuildOptions): ClientModel;
};

export function ClientFactory(sequelize: Sequelize): ClientStatic {
  return <ClientStatic>sequelize.define('clients', {
    _id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    customerId: {
      type: DataTypes.INTEGER,
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
