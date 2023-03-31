const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.URL;
mongoose.set("strictQuery", false);

function connectToDataBase() {
  return mongoose
    .connect(url)
    .then(() => console.log("Banco de dados conectado com sucesso!"))
    .catch((error) =>
      console.log("Erro na conexão com banco de dados!", error)
    );
}
function isObjectIdValid(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

module.exports = {
  isObjectIdValid,
  connectToDataBase,
};
