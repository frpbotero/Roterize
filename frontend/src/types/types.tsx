export type clientsType = {
  _id?: string;
  name: string | null;
  cnpj: string | null;
  numberwhats: number | null;
  numbercontact: number | null;
  email: string | null;
  cep: string | null;
  address: string | null;
  district: string | null;
  number: number | null;
  complement: string | null;
  referencePoint: string | null;
  map?: Array<string>;
  message?: string;
};
export type productsType = {
  _id?: string;
  name: string | null;
  description: string | null;
  map?: Array<string>;
  message?: string;
};
export type deliveryType = {
  _id?: string;
  client: clientsType;
  deliveryList: Array<deliveryList>;
  descriptionDelivery: string;
  updatedAt?: string;
  signature?: string;
  status: string;
  map?: Array<string>;
  message?: string;
};
export type deliveryList = {
  _id: string;
  product: productsType;
  qtd: Number;
};
export interface IUser {
  email: string;
  password: string;
}
