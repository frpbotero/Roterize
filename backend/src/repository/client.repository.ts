import { Client, IClient } from "../model/clients.model";

export const clientRepository = {
  getAll() {
    return Client.find();
  },
  getByID(id: string) {
    return Client.findOne({ _id: id });
  },
  create(body: IClient) {
    return Client.create(body);
  },
  update(id: string, body: Partial<IClient>) {
    return Client.updateOne({ _id: id }, { $set: body });
  },
  delete(id: string) {
    return Client.deleteOne({ _id: id });
  },
};
