import { userRespository } from "../repository/user.repository";
import { IUser } from "../model/user.model";

function getAll() {
  return userRespository.getAll();
}
function getByID(id: string) {
  return userRespository.getByID(id);
}
function getByEmail(email: string) {
  return userRespository.getByEmail(email);
}
function create(body: IUser) {
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
