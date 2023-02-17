const express = require("express");
const mongoose = require("mongoose");
const { connectToDataBase } = require("./src/db/database.helper");
const clientsRouter = require("./src/clients/clients.router");
const productRouter = require("./src/products/products.router");
const deliveryRouter = require("./src/delivery/delivery.router");
const cors = require("cors");
const url = process.env.URL;
require("dotenv").config();
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

  // Rotas
  app.use("/clients", clientsRouter);
  app.use("/products", productRouter);
  app.use("/delivery", deliveryRouter);

  app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
  });

  console.log(url);
}
main();
