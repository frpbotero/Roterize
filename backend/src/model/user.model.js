const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  cpf: { type: String, require: true },
  function: { type: String, require: true },
});
const User = mongoose.model("User", userSchema);

module.exports = User;
