import mongoose, { Schema } from "mongoose";
import moment from "moment/moment";

interface IProducts {
  name: string;
  qtd: number;
}

interface IDelivery {
  client: Object;
  deliveryList: Array<IProducts>;
  descriptionDelivery: string;
  signature: string;
  status: string;
  createdAt: string | Date;
  updatedAt: string | Date;
}

const deliverySchema = new Schema<IDelivery>({
  client: { type: Object, require: true },
  deliveryList: { type: [Object], require: true },
  descriptionDelivery: { type: String, require: true },
  signature: { type: String },
  status: { type: String, require: true },
  createdAt: {
    type: String,
    default: moment(new Date()).format("DD/MM/YYYY, HH:mm:ss"),
  },
  updatedAt: { type: String, require: true },
});
export const Delivery = mongoose.model<IDelivery>("delivery", deliverySchema);
