import { Request, Response, NextFunction } from "express";
import investimentosService from "../service/investimentos.service";
import Joi from "../utils/JoiValidations";



const middlewareVenda = async (req: Request, _res: Response, next: NextFunction) => {
  const {qtdeAtivo} = req.body;
  const {error} = Joi.JoiValidations.validate(req.body);
  if(error) {
    next({ status: 400, response: error.details[0].message })
  }
  const result  = await investimentosService.getInvestimentByClientAndAsset(req.body);
  if(result.qtdeAtivo < qtdeAtivo) {
    next({status: 404, response: `Quantidade de ativos disponíveis para venda é de: ${result.qtdeAtivo} lotes`})
  }
  next()
}

export default middlewareVenda;