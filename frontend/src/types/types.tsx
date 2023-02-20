export type clients ={
    name: string|null,
    cnpj: string|null,
    numberwhats: number|null,
    numbercontact: number|null,
    email: string|null,
    cep: string|null,
    address: string|null,
    district: string|null,
    number: number|null,
    complement: string|null,
    referencePoint: string|null,
}
export type products={
    name:string|null,
    description:string|null
}
export type delivery={
    client:string|null,
    delivery:Array<string>|null,
    descriptionDelivery:string|null,
}