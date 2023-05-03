import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import userService from "../service/user.service";

dotenv.config();

export function permissionMiddleware(permission: string[]) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers["authorization"];

    if (!token) {
      return res.status(401).send({ message: "Acesso negado!" });
    }

    const tokenSplited = token.split("Bearer ");
    const decoded = jwt.decode(tokenSplited[1]);
    const decodedInfo = JSON.parse(JSON.stringify(decoded));
    console.log(decodedInfo.id);
    const user = await userService.getByID(decodedInfo.id);

    if (!user) {
      return res.status(401).send({ message: "Usuário não identificado!" });
    } else {
      if (user.permission && permission.includes(user.permission)) {
        next();
      } else {
        return res.status(401).send({ message: "Usuário sem autorização!" });
      }
    }
  };
}
