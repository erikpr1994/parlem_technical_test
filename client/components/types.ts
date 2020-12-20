export type tClient = {
  createdAt: Date;
  customerId: number;
  docNum: String;
  docType: String;
  email: String;
  familyName1: String;
  givenName: String;
  phone: number;
  products: tProduct[];
  updatedAt: Date;
  _id: number;
};
export type tProduct = {
  createdAt: Date;
  customerId: number;
  numeracioTerminal: number;
  productName: String;
  productTypeName: String;
  soldAt: Date;
  updatedAt: Date;
  _id: number;
};
