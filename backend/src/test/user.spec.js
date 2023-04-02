const service = require("../service/clients.service");

describe("Service", () => {
  //Teste de criação de usuário
  it("CreateUser", () => {
    //Contexto do teste
    expect(
      service.createClient({
        name: "CB Comercial",
        cnpj: "011315546541",
        numberwhats: 92991599300,
        numbercontact: 92991037723,
        email: "cb@cbcomercial.com",
        cep: "69025555",
        address: "Rua Camilo Moraes",
        district: "Portuário",
        number: 350,
        complement: "SAla23",
        referencePoint: "Em frente ao Shopping Tintas",
      })
    ).toBe({
      name: "CB Comercial",
      cnpj: "011315546541",
      numberwhats: 92991599300,
      numbercontact: 92991037723,
      email: "cb@cbcomercial.com",
      cep: "69025555",
      address: "Rua Camilo Moraes",
      district: "Portuário",
      number: 350,
      complement: "SAla23",
      referencePoint: "Em frente ao Shopping Tintas",
    });
  });
});
