import { Request, Response, NextFunction } from "express";
import Joi from "../utils/JoiValidations";



const middlewareDeposito = async (req: Request, _res: Response, next: NextFunction) => {
  const {error} = Joi.JoiValidationsSaque.validate(req.body);
  if(error?.details[0].message.includes('CodCliente')){
    next({
      status: 400, 
      response: 'Codigo do cliente inválido, tente um código válido.'
    })
  }
  if(error?.details[0].message.includes('Valor')) {
    next({
      status: 400, 
      response: 'Insira um valor válido para depósito.'
    })
  }
  next()
}

export default middlewareDeposito;