const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema({
  client: { type: Object, require: true },
  deliveryList: { type: Array, require: true },
  descriptionDelivery: { type: String, require: true },
  signature: { type: String },
  status: { type: String, require: true },
  date: { type: Date, require: true },
});
const Delivery = mongoose.model("delivery", deliverySchema);

module.exports = Delivery;
