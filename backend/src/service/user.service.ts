import { userRespository } from "../repository/user.repository";
import { IUser } from "../model/user.model";
import { validarCPF } from "../utils/validaCPF";
import { validField } from "../utils/validaFields";
import bcrypt from "bcrypt";

function getAll() {
  return userRespository.getAll();
}
function getByID(id: string) {
  return userRespository.getByID(id);
}
function getByEmail(email: string) {
  return userRespository.getByEmail(email);
}
async function create(body: IUser) {
  const user = await userRespository.getByEmail(body.email);
  if (user) throw new Error("Usuário já cadastrado!");
  if (validarCPF(body.cpf) == false) {
    throw new Error("CPF inválido!");
  }
  if (validField(body) == false) {
    throw new Error("Favor verificar os dados enviados!");
  }
  if (body.password) {
    body.password = await bcrypt.hash(body.password, 10);
  }
  return userRespository.create(body);
}
function updateUser(id: string, body: Partial<IUser>) {
  return userRespository.update(id, body);
}
function deleteUser(id: string) {
  return userRespository.delete(id);
}

export default {
  getAll,
  getByEmail,
  getByID,
  create,
  updateUser,
  deleteUser,
};
