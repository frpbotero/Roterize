const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  name: { type: String, require: true },
  cpf: { type: String, require: true },
  function: { type: String, require: true },
});
const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
