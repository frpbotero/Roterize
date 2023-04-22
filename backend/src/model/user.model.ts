import mongoose, { Schema } from "mongoose";
import moment from "moment/moment";

export interface IUser {
  name: string;
  cpf: string;
  permission: string;
  email: string;
  password: string;
  createdAt: string | Date;
}

const userSchema = new Schema<IUser>({
  name: { type: String, require: true },
  cpf: { type: String, require: true },
  permission: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  createdAt: {
    type: String,
    default: moment(new Date()).format("DD/MM/YYYY, HH:mm:ss"),
  },
});
export const User = mongoose.model<IUser>("User", userSchema);
