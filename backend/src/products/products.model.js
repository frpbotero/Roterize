const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
});
const product = mongoose.model("Product", clientSchema);

module.exports = product;
