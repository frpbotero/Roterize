const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema({
  client: { type: String, require: true },
  deliveryList: { type: Array, require: true },
  descriptionDelivery: { type: String, require: true },
});
const Delivery = mongoose.model("delivery", deliverySchema);

module.exports = Delivery;
