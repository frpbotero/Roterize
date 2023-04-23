import { deliveryRepository } from "../repository/delivery.repository";
import { IDelivery } from "../model/delivery.model";

function getAll() {
  return deliveryRepository
    .getAll()
    .select("_id client deliveryList descriptionDelivery status signature");
}
function getByID(id: string) {
  return deliveryRepository.getByID(id);
}
function create(body: IDelivery) {
  return deliveryRepository.create(body);
}
function update(id: string, body: Partial<IDelivery>) {
  return deliveryRepository.update(id, body);
}
function deleteDelivery(id: string) {
  return deliveryRepository.delete(id);
}

export default {
  getAll,
  getByID,
  create,
  update,
  deleteDelivery,
};
