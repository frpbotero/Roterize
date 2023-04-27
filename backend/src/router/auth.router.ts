import { Request, Response, Router } from "express";
import AuthService from "../service/auth.service";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const token = await AuthService.auth(email, password);
    res.status(200).send({ token });
  } catch (error: any) {
    res.status(401).send({ message: error.message });
  }
});
export default router;
