const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  name: { type: String, require: true },
  cnpj: { type: String, require: true },
  numberwhats: { type: Number, require: true },
  numbercontact: { type: Number, require: true },
  email: { type: String, require: true },
  cep: { type: String, require: true },
  address: { type: String, require: true },
  district: { type: String, require: true },
  number: { type: Number, require: true },
  complement: { type: String, require: true },
  referencePoint: { type: String, require: true },
});
const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
