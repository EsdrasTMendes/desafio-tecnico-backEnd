import { Request, Response, NextFunction } from "express";
import Joi from "../utils/JoiValidations";

const authMiddleware = async (req: Request, _res: Response, next: NextFunction) => {
  const {emailCliente, passwordCliente} = req.body;
  const {error} = Joi.JoiValidationsAuth.validate(req.body);
  console.log(error);
  next()
};

export default authMiddleware;