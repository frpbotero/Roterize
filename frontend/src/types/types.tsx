export type clients ={
    name: string,
  cnpj: string,
  numberwhats: number,
  numbercontact: number,
  email: string,
  cep: string,
  address: string,
  district: string,
  number: number,
  complement: string,
  referencePoint: string,
}
export type products={
    name:string,
    description:string
}
export type delivery={
    client:string,
    delivery:Array<string>
    descriptionDelivery:string
}