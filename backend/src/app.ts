import express from "express";
import connection from "./db/database.helper";
import ClientRouter from "./router/clients.router";
import ProductRouter from "./router/products.router";
import DeliveryRouter from "./router/delivery.router";
import UserRouter from "./router/users.router";
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
  app.use("/client", ClientRouter);
  app.use("/product", ProductRouter);
  app.use("/delivery", DeliveryRouter);
  app.use("/user", UserRouter);

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
