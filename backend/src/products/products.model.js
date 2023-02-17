const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
});
const product = mongoose.model("Product", productSchema);

module.exports = product;
