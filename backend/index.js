const express = require("express");
const mongoose = require("mongoose");
const { connectToDataBase } = require("./src/db/database.helper");

async function main() {
  //Conecta com banco de dados
  await connectToDataBase();
  //Cria o servidor Express
  const app = express();

  //Middlewares
  app.use(cors());
  app.use(express.json());

  //Rota principal
  app.get("/", function (req, res) {
    res.send("Hello World");
  });

  app.listen(3000);
}
main();
