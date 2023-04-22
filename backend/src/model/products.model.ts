import mongoose, { Schema } from "mongoose";
import moment from "moment";

interface IProduct {
  name: string;
  description: string;
}

const productSchema = new Schema<IProduct>({
  name: { type: String, require: true },
  description: { type: String, require: true },
});
export const product = mongoose.model<IProduct>("Product", productSchema);
