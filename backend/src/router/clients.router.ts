import { Request, Response, Router } from "express";
import ClientService from "../service/clients.service";
import { permissionMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.get(
  "/",
  permissionMiddleware(["ADM", "COLAB"]),
  async (req: Request, res: Response) => {
    const clients = await ClientService.getAll();

    if (!clients) {
      return res
        .status(404)
        .send({ message: "Não foram encontrados clientes cadastrados!" });
    }
    res.status(200).send(clients);
  }
);
router.get(
  "/:id",
  permissionMiddleware(["ADM", "COLAB"]),
  async (req: Request, res: Response) => {
    const client = await ClientService.getByID(req.params.id);
    if (!client) {
      return res.status(404).send({ message: "Cliente não encontrado!" });
    }
    res.status(200).send(client);
  }
);
router.post(
  "/",
  permissionMiddleware(["ADM", "COLAB"]),
  async (req: Request, res: Response) => {
    try {
      await ClientService.create(req.body);
      res.status(201).send({ message: "Cliente cadastrado com sucesso!" });
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }
);
router.put(
  "/:id",
  permissionMiddleware(["ADM", "COLAB"]),
  async (req: Request, res: Response) => {
    try {
      const client = await ClientService.getByID(req.params.id);
      if (!client) {
        return res.status(404).send({ message: "Cliente não entrado!" });
      }
      await ClientService.update(req.params.id, req.body);
      res.status(200).send({ message: "Cliente atualizado com sucesso!" });
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }
);
router.delete(
  "/:id",
  permissionMiddleware(["ADM"]),
  async (req: Request, res: Response) => {
    try {
      const client = await ClientService.getByID(req.params.id);
      if (!client) {
        return res.status(404).send({ message: "Cliente não entrado!" });
      }
      await ClientService.deleteClient(req.params.id);
      res.status(200).send({ message: "Cliente excluído com sucesso!" });
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }
);

export default router;
