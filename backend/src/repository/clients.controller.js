const service = require("../service/clients.service");
const { isObjectIdValid } = require("../db/database.helper");

//Controller trabalha com as requisições e respostas

async function findAll(req, res) {
  const clients = await service.findAllClients();
  res.send(clients);
}
async function findById(req, res) {
  const id = req.params.id;

  if (!isObjectIdValid(id)) {
    return res.status(404).json({ message: "ID inválido!" });
  }
  const client = await service.findByIdClient(id);
  if (!client) {
    return res.status(404).json({ message: "Cliente não encontrado!" });
  }
  res.json(client);
}
async function create(req, res) {
  const client = req.body;
  console.log(client);
  if (
    !client ||
    !client.name ||
    !client.cnpj ||
    !client.numberwhats ||
    !client.email ||
    !client.cep ||
    !client.address ||
    !client.number ||
    !client.complement ||
    !client.referencePoint
  ) {
    return res.status(404).json({ message: "Dados inválidos." });
  }

  const newClient = await service.createClient(client);

  res.status(200).json({ message: "Cliente cadastrado com sucesso!" });
}
async function updateById(req, res) {
  const id = req.params.id;

  if (!isObjectIdValid(id)) {
    return res.status(404).json({ message: "ID inválido!" });
  }
  const client = req.body;

  if (
    !client ||
    !client.name ||
    !client.cnpj ||
    !client.numberwhats ||
    !client.email ||
    !client.cep ||
    !client.address ||
    !client.number ||
    !client.complement ||
    !client.referencePoint
  ) {
    return res.status(404).json({ message: "Dados inválidos." });
  }

  await service.updateClient(id, client);

  res.status(200).json({ message: "Cliente atualizado com sucesso!" });
}
async function deleteById(req, res) {
  const id = req.params.id;

  if (!isObjectIdValid(id)) {
    return res.status(404).json({ message: "ID inválido!" });
  }
  await service.deleteByIdClient(id);

  res.status(200).json({ message: "Cliente excluído com sucesso!" });
}

module.exports = {
  findAll,
  findById,
  create,
  updateById,
  deleteById,
};
