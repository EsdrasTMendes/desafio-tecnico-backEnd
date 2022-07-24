import { Request, Response, NextFunction } from "express";
import Joi from "../utils/JoiValidations";
import clientesModel from "../models/clientes.model";

const createClientMiddleware = async (req: Request, _res: Response, next: NextFunction) => {
  const {error} = Joi.JoiCreateClient.validate(req.body);
  const clientExist = await clientesModel.getClientByEmail(req.body.emailCliente);
  if(clientExist) {
    next({
      status: 400,
      response: 'email já possui cadastro'
    })
  }
  if(error?.details[0].message.includes('nomeCliente')) {
    next({
      status: 400,
      response: 'Nome de cliente inválido'
    })
  }
  if(error?.details[0].message.includes('emailCliente')) {
      next({
        status: 400,
        response: 'Email inválido'
    })
  }
  if(error?.details[0].message.includes('saldoConta' || 'saldoCliente')) {
      next({
        status: 400,
        response: 'Saldo da conta e saldo de custodia devem ser um número válido'
    })
  }
  if(error?.details[0].message.includes('passwordCliente')) {
    next({
      status: 400,
      response: 'Password deve ser de no mínimo 8 caracteres'
    })
  }
    next()
};

export default createClientMiddleware;