import { Delivery, IDelivery } from "../model/delivery.model";
import moment from "moment/moment";

export const deliveryRepository = {
  getAll() {
    return Delivery.find();
  },
  getByID(id: string) {
    return Delivery.findOne({ _id: id });
  },
  create(body: IDelivery) {
    return Delivery.create(body);
  },
  update(id: string, body: Partial<IDelivery>) {
    return Delivery.updateOne({ _id: id }, { $set: body });
  },
  delete(id: string) {
    return Delivery.deleteOne({ _id: id });
  },
  getByDate(date: string) {
    const start = moment(date, "YYYY-MM-DD").startOf('day').toDate();
    const end = moment(date, "YYYY-MM-DD").endOf('day').toDate();
    return Delivery.find({ createdAt: { $gte: start, $lte: end } });
  },
};
