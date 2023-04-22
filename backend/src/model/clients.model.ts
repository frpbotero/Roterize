import mongoose, { Schema } from "mongoose";
import moment from "moment/moment";

interface IClient {
  name: string;
  cnpj: string;
  cellPhone: Number;
  email: string;
  zipCode: string;
  address: string;
  district: string;
  number: Number;
  complement: string;
  referencePoint: string;
  createdAt: string | Date;
}

const clientSchema = new Schema<IClient>({
  name: { type: String, require: true },
  cnpj: { type: String, require: true },
  cellPhone: { type: Number, require: true },
  email: { type: String, require: true },
  zipCode: { type: String, require: true },
  address: { type: String, require: true },
  district: { type: String, require: true },
  number: { type: Number, require: true },
  complement: { type: String, require: true },
  referencePoint: { type: String, require: true },
  createdAt: {
    type: String,
    default: moment(new Date()).format("DD/MM/YYYY, HH:mm:ss"),
  },
});
export const Client = mongoose.model<IClient>("Client", clientSchema);
