import { clientRepository } from "../repository/client.repository";

import { IClient } from "../model/clients.model";

function getAll() {
  return clientRepository
    .getAll()
    .select("_id name cnpj address district number complement referencePoint ");
}
function getByID(id: string) {
  return clientRepository.getByID(id);
}
function create(body: IClient) {
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
