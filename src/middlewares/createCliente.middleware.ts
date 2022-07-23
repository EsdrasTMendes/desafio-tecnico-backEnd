import { Request, Response, NextFunction } from "express";
import Joi from "../utils/JoiValidations";

const createClientMiddleware = async (req: Request, _res: Response, next: NextFunction) => {
  const {emailCliente, passwordCliente} = req.body;
  const {error} = Joi.JoiCreateClient.validate(req.body);
  console.log(error);
  next()
};

export default createClientMiddleware;