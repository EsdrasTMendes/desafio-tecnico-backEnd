import { Request, Response, NextFunction } from "express";
import clientesService from "../service/clientes.service";
import Joi from "../utils/JoiValidations";

const contaMiddleware = async (req: Request, _res: Response, next: NextFunction) => {
  const {codCliente} = req.params;
  const{error} = Joi.JoiValidationsCodClient.validate(req.params);
  const result = await clientesService.getClientByCode(+codCliente)
  if(error?.details[0].message.includes('number' || 'greater')) {
    next({
      status: 404,
      response: 'O código do cliente deve ser um número maior que 0.'
    })
  }
  if(!result) {
    next({
      status: 404,
      response: 'Nenhum usuário encontrado com o código informado.'
    })
  }
  next()
};

export default contaMiddleware;