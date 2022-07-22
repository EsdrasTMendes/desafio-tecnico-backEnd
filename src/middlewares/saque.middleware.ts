import { Request, Response, NextFunction } from "express";
import clientesService from "../service/clientes.service";
import Joi from "../utils/JoiValidations";



const middlewareSaque = async (req: Request, _res: Response, next: NextFunction) => {
  const {CodCliente, Valor } = req.body;
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
      response: 'Insira um valor válido para saque.'
    })
  }
  if(!error) {
    const {saldoConta} = await clientesService.getClientByCode(CodCliente);
    if(+saldoConta < +Valor) {
      next({
        status: 404,
        response: 'Não é possível fazer o saque. Saldo insuficiente.'
      })
    }
  }

  next()
}

export default middlewareSaque;