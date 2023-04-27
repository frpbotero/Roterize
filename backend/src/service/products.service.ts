import { productRepository } from "../repository/product.repository";
import { IProduct } from "../model/products.model.js";
import { validField } from "../utils/validaFields";

function getAll() {
  return productRepository.getAll();
}
function getByID(id: string) {
  return productRepository.getByID(id);
}
async function create(body: IProduct) {
  const productList: Array<IProduct> = await productRepository.getAll();

  if (
    productList.some(
      (product) => product.name.toLowerCase() === body.name.toLowerCase()
    )
  )
    throw new Error("Produto já cadastrado!");
  if (validField(body) !== true) {
    throw new Error(`Favor verificar os dados enviados!`);
  }

  return productRepository.create(body);
}
function updateUser(id: string, body: Partial<IProduct>) {
  return productRepository.update(id, body);
}
function deleteUser(id: string) {
  return productRepository.delete(id);
}

export default {
  getAll,
  getByID,
  create,
  updateUser,
  deleteUser,
};
