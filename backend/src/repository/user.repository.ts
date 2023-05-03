import { User, IUser } from "../model/user.model";

export const userRespository = {
  getAll() {
    return User.find();
  },
  getByID(id: string) {
    return User.findById({ _id: id });
  },
  getByEmail(email: string) {
    return User.findOne({ email });
  },
  getByName(name: string) {
    return User.findOne({ name });
  },
  create(body: IUser) {
    return User.create(body);
  },
  update(id: string, body: Partial<IUser>) {
    return User.updateOne({ _id: id }, { $set: body });
  },
  delete(id: string) {
    return User.deleteOne({ _id: id });
  },
};
