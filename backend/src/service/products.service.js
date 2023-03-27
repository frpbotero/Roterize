const Product = require("../model/products.model");

const ObjectId = require("mongoose").Types.ObjectId;

function findAllProducts() {
  return Product.find().select("_id name description");
}
function findByIdProduct(id) {
  const objectId = new ObjectId(id);
  return Product.findById(objectId);
}
function createProduct(product) {
  return Product.create(product);
}
function updateProduct(id, product) {
  const objectId = new ObjectId(id);
  return Product.findByIdAndUpdate(objectId, product);
}
function deleteByIdProduct(id) {
  const objectId = new ObjectId(id);
  return Product.findByIdAndDelete(objectId);
}

module.exports = {
  findAllProducts,
  findByIdProduct,
  updateProduct,
  deleteByIdProduct,
  createProduct,
};
