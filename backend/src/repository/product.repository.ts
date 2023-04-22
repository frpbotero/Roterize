import { Product, IProduct } from "../model/products.model";

export const productRepository = {
  getAll() {
    return Product.find();
  },
  getByID(id: string) {
    return Product.findById({ _id: id });
  },
  update(id: string, body: Partial<IProduct>) {
    return Product.updateOne({ _id: id }, { $set: body });
  },
  delete(id: string) {
    return Product.deleteOne({ _id: id });
  },
};
