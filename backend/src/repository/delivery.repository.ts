import { Delivery, IDelivery } from "../model/delivery.model";

export const deliveryRepository = {
  getAll() {
    return Delivery.find();
  },
  getByID(id: string) {
    return Delivery.findOne({ _id: id });
  },
  update(id: string, body: Partial<IDelivery>) {
    return Delivery.updateOne({ _id: id }, { $set: body });
  },
  delete(id: string) {
    return Delivery.deleteOne({ _id: id });
  },
};
