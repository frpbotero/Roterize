import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import userService from "../service/user.service";

dotenv.config();

interface TokenJWT {
  id: string;
}

export function permissionMiddleware(permission: string[]) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const [schema, token] = req.headers.authorization!.split(" ");

    if (!token) {
      return res.status(401).send({ message: "Acesso negado!" });
    }

    const decoded = jwt.decode(token) as TokenJWT;

    const user = await userService.getByID(decoded.id);

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
