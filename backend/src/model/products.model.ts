import mongoose, { Schema } from "mongoose";
import moment from "moment";

interface IProduct {
  name: string;
  description: string;
  createdAt: string | Date;
}

const productSchema = new Schema<IProduct>({
  name: { type: String, require: true },
  description: { type: String, require: true },
  createdAt: {
    type: String,
    default: moment(new Date()).format("DD/MM/YYYY, HH:mm:ss"),
  },
});
export const product = mongoose.model<IProduct>("Product", productSchema);
