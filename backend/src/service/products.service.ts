import { productRepository } from "../repository/product.repository";
import { IProduct } from "../model/products.model.js";

function getAll() {
  return productRepository.getAll();
}
function getByID(id: string) {
  return productRepository.getByID(id);
}
function create(body: IProduct) {
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
