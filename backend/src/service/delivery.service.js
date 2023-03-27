const Delivery = require("../model/delivery.model");

const ObjectId = require("mongoose").Types.ObjectId;

function findAllDelivery() {
  return Delivery.find().select("_id client deliveryList descriptionDelivery ");
}
function findByIdDeveliry(id) {
  const objectId = new ObjectId(id);
  return Delivery.findById(objectId);
}
function createDelivery(delivery) {
  return Delivery.create(delivery);
}
function updateDelivery(id, delivery) {
  const objectId = new ObjectId(id);
  return Delivery.findByIdAndUpdate(objectId, delivery);
}
function deleteByIdDelivery(id) {
  const objectId = new ObjectId(id);
  return Delivery.findByIdAndDelete(objectId);
}

module.exports = {
  findAllDelivery,
  findByIdDeveliry,
  createDelivery,
  updateDelivery,
  deleteByIdDelivery,
};
