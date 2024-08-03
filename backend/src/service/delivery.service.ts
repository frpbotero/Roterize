import { deliveryRepository } from "../repository/delivery.repository";
import { IDelivery } from "../model/delivery.model";
import { validField } from "../utils/validaFields";

function getAll() {
  return deliveryRepository
    .getAll()
    .select("_id client deliveryList descriptionDelivery status signature");
}
function getByID(id: string) {
  return deliveryRepository.getByID(id);
}
function create(body: IDelivery) {
  if (validField(body) !== true) {
    throw new Error(`Favor verificar os dados enviados!`);
  }
  return deliveryRepository.create(body);
}
function update(id: string, body: Partial<IDelivery>) {
  return deliveryRepository.update(id, body);
}
function deleteDelivery(id: string) {
  return deliveryRepository.delete(id);
}
function getByDate(date: string) {
  return deliveryRepository.getByDate(date);
}


export default {
  getAll,
  getByID,
  create,
  update,
  deleteDelivery,
  getByDate
};
