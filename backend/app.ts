import express from "express";
import connection from "./src/db/database.helper";
import clientsRouter from "./src/router/clients.router";
import productRouter from "./src/router/products.router";
import deliveryRouter from "./src/router/delivery.router";
import userRouter from "./src/router/users.router";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

async function main() {
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
  app.use("/users", userRouter);

  connection
    .then(() => {
      console.log("Banco de dados conectado");

      app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000");
      });
    })
    .catch((error) => console.log(error));
}
main();
