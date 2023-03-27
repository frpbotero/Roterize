const service = require("../service/products.service");
const { isObjectIdValid } = require("../db/database.helper");

//Controller trabalha com as requisições e respostas

async function findAll(req, res) {
  const product = await service.findAllProducts();
  res.send(product);
}
async function findById(req, res) {
  const id = req.params.id;

  if (!isObjectIdValid(id)) {
    return res.status(404).json({ message: "ID inválido!" });
  }
  const product = await service.findByIdProduct(id);
  if (!product) {
    return res.status(404).json({ message: "Produto não encontrado!" });
  }
  res.json(product);
}
async function create(req, res) {
  const product = req.body;

  if (!product || !product.name || !product.description) {
    return res.status(404).json({ message: "Dados inválidos." });
  }

  await service.createProduct(product);

  res.status(200).json({ message: "Produto cadastrado com sucesso!" });
}
async function updateById(req, res) {
  const id = req.params.id;

  if (!isObjectIdValid(id)) {
    return res.status(404).json({ message: "ID inválido!" });
  }
  const product = req.body;

  if (!product || !product.name || !product.description) {
    return res.status(404).json({ message: "Dados inválidos." });
  }

  await service.updateProduct(id, product);

  res.status(200).json({ message: "Produto atualizado com sucesso!" });
}
async function deleteById(req, res) {
  const id = req.params.id;

  if (!isObjectIdValid(id)) {
    return res.status(404).json({ message: "ID inválido!" });
  }
  await service.deleteByIdProduct(id);

  res.status(200).json({ message: "Produto excluído com sucesso!" });
}

module.exports = {
  findAll,
  findById,
  create,
  updateById,
  deleteById,
};
