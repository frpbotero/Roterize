import { Request, Response, Router } from "express";
import DeliveryService from "../service/delivery.service";
import { permissionMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.get(
  "/",
  permissionMiddleware(["ADM", "COLAB", "DELIVERY"]),
  async (req: Request, res: Response) => {
    const deliveries = await DeliveryService.getAll();

    if (!deliveries) {
      return res
        .status(404)
        .send({ message: "Não foi encontrado pedidos cadastrados!" });
    }
    res.status(200).send(deliveries);
  }
);

router.get(
  "/:id",
  permissionMiddleware(["ADM", "COLAB", "DELIVERY"]),
  async (req: Request, res: Response) => {
    const delivery = await DeliveryService.getByID(req.params.id);
    if (!delivery) {
      return res.status(404).send({ message: "Pedido não encontrado!" });
    }
    res.status(200).send(delivery);
  }
);

router.get(
  "/date/:date",
  permissionMiddleware(["ADM", "COLAB", "DELIVERY"]),
  async (req: Request, res: Response) => {
    try {
      const date = req.params.date;
      const deliveries = await DeliveryService.getByDate(date);
      if (!deliveries || deliveries.length === 0) {
        return res.status(404).send({ message: "Nenhum pedido encontrado para a data especificada!" });
      }
      res.status(200).send(deliveries);
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }
);

router.post(
  "/",
  permissionMiddleware(["ADM", "COLAB", "DELIVERY"]),
  async (req: Request, res: Response) => {
    try {
      await DeliveryService.create(req.body);
      res.status(201).send({ message: "Pedido cadastrado com sucesso!" });
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }
);

router.put(
  "/:id",
  permissionMiddleware(["ADM", "COLAB", "DELIVERY"]),
  async (req: Request, res: Response) => {
    try {
      const delivery = await DeliveryService.getByID(req.params.id);
      if (!delivery) {
        return res.status(404).send({ message: "Pedido não encontrado!" });
      }
      await DeliveryService.update(req.params.id, req.body);
      res.status(200).send({ message: "Pedido atualizado com sucesso!" });
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
      const delivery = await DeliveryService.getByID(req.params.id);
      if (!delivery) {
        return res.status(404).send({ message: "Pedido não encontrado!" });
      }
      await DeliveryService.deleteDelivery(req.params.id);
      res.status(200).send({ message: "Pedido excluído com sucesso!" });
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }
);

export default router;
