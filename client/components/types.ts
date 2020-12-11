export type tClient = {
  createdAt: Date;
  customerId: Number;
  docNum: String;
  docType: String;
  email: String;
  familyName1: String;
  givenName: String;
  phone: Number;
  products: tProduct[];
  updatedAt: Date;
  _id: Number;
};
export type tProduct = {
  createdAt: Date;
  customerId: Number;
  numeracioTerminal: Number;
  productName: String;
  productTypeName: String;
  soldAt: Date;
  updatedAt: Date;
  _id: Number;
};
