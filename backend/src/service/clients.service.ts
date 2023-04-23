import { clientRepository } from "../repository/client.repository";

import { IClient } from "../model/clients.model";
import { validField } from "../utils/validaFields";

function getAll() {
  return clientRepository
    .getAll()
    .select("_id name cnpj address district number complement referencePoint ");
}
function getByID(id: string) {
  return clientRepository.getByID(id);
}
async function create(body: IClient) {
  const client = await clientRepository.getByCNPJ(body.cnpj);
  if (client) throw new Error("Cliente já cadastrado!");
  if (validField(body) == false) {
    throw new Error("Favor verificar os dados enviados!");
  }
  return clientRepository.create(body);
}
function update(id: string, body: Partial<IClient>) {
  return clientRepository.update(id, body);
}
function deleteClient(id: string) {
  return clientRepository.delete(id);
}

export default {
  getAll,
  getByID,
  create,
  update,
  deleteClient,
};
