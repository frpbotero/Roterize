const service = require("../service/user.service");
const { isObjectIdValid } = require("../db/database.helper");

//Controller trabalha com as requisições e respostas

async function findAll(req, res) {
  const users = await service.findAllUsers();
  res.send(users);
}
async function findById(req, res) {
  const id = req.params.id;

  if (!isObjectIdValid(id)) {
    return res.status(404).json({ message: "ID inválido!" });
  }
  const user = await service.findByIdUser(id);
  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado!" });
  }
  res.json(user);
}
async function create(req, res) {
  const user = req.body;
  console.log(user);
  if (!user || !user.name || !user.cpf || !user.function) {
    return res.status(404).json({ message: "Dados inválidos." });
  }

  const newUser = await service.createClient(user);

  res.status(200).json({ message: "Usuário cadastrado com sucesso!" });
}
async function updateById(req, res) {
  const id = req.params.id;

  if (!isObjectIdValid(id)) {
    return res.status(404).json({ message: "ID inválido!" });
  }
  const user = req.body;

  if (!user || !user.name || !user.cpf || !user.function) {
    return res.status(404).json({ message: "Dados inválidos." });
  }

  await service.updateUser(id, user);

  res.status(200).json({ message: "Usuário atualizado com sucesso!" });
}
async function deleteById(req, res) {
  const id = req.params.id;

  if (!isObjectIdValid(id)) {
    return res.status(404).json({ message: "ID inválido!" });
  }
  await service.deleteByIdUser(id);

  res.status(200).json({ message: "Usuário excluído com sucesso!" });
}

module.exports = {
  findAll,
  findById,
  create,
  updateById,
  deleteById,
};
