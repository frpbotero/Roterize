export type clientsType = {
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
};
export type productsType = {
  name: string | null;
  description: string | null;
  map?: Array<string>;
};
export type deliveryType = {
  client: clientsType;
  delivery: Array<deliveryList>;
  descriptionDelivery: string;
  map?: Array<string>;
};
export type deliveryList = {
  product: productsType;
  qtd: Number;
};
