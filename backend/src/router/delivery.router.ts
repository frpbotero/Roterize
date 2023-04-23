import { Request, Response, Router } from "express";
import DeliveryService from "../service/delivery.service";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const deliveries = await DeliveryService.getAll();

  if (!deliveries) {
    return res
      .status(404)
      .send({ message: "Não foi encontrado pedidos cadastrados!" });
  }
  res.status(200).send(deliveries);
});
router.get("/:id", async (req: Request, res: Response) => {
  const delivery = await DeliveryService.getByID(req.params.id);
  if (!delivery) {
    return res.status(404).send({ message: "Pedido não encontrado!" });
  }
  res.status(200).send(delivery);
});
router.post("/", async (req: Request, res: Response) => {
  try {
    await DeliveryService.create(req.body);
    res.status(201).send({ message: "Pedido cadastrado com sucesso!" });
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
});
router.put("/:id", async (req: Request, res: Response) => {
  try {
    const delivery = await DeliveryService.getByID(req.params.id);
    if (!delivery) {
      return res.status(404).send({ message: "Pedido não entrado!" });
    }
    await DeliveryService.updateUser(req.params.id, req.body);
    res.status(200).send({ message: "Pedido atualizado com sucesso!" });
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
});
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const delivery = await DeliveryService.getByID(req.params.id);
    if (!delivery) {
      return res.status(404).send({ message: "Pedido não entrado!" });
    }
    await DeliveryService.deleteUser(req.params.id);
    res.status(200).send({ message: "Pedido excluído com sucesso!" });
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
});

export default router;
