import { Request, Response, Router } from "express";
import UserService from "../service/user.service";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const users = await UserService.getAll();
  if (!users) {
    return res
      .status(404)
      .send({ message: "Não encontramos usuários cadastrados!" });
  }
  res.status(200).send(users);
});

router.get("/:id", async (req: Request, res: Response) => {
  const user = await UserService.getByID(req.params.id);

  if (!user) {
    return res.status(404).send({ message: "Usuário não encontrado!" });
  }
  res.status(200).send(user);
});
router.post("/", async (req: Request, res: Response) => {
  try {
    await UserService.create(req.body);
    res.status(201).send({ message: "Usuário criado com sucesso!" });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
});
router.put("/:id", async (req: Request, res: Response) => {
  try {
    const user = await UserService.getByID(req.params.id);
    if (!user) {
      return res.status(404).send({ message: "Usuário não encontrado!" });
    }
    await UserService.updateUser(req.params.id, req.body);
    res.status(200).send({ message: "Usuário atualizado com sucesso!" });
  } catch {
    res.status(400).send({
      messsage: "Aconteceu algo, favor verificar as informações enviadas.",
    });
  }
});
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const user = await UserService.getByID(req.params.id);
    if (!user) {
      return res.status(404).send({ message: "Usuário não encontrado!" });
    }
    await UserService.deleteUser(req.params.id);
    res.status(200).send({ message: "Usuário excluído com sucesso!" });
  } catch {
    res.status(400).send({
      message: "Aconteceu algo, favor verificar as informações enviadas.",
    });
  }
});
export default router;
