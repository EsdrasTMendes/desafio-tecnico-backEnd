import { Request, Response, NextFunction } from "express";
import acoesService from "../service/acoes.service";
import clientesService from "../service/clientes.service";
import investimentosService from "../service/investimentos.service";
import Joi from "../utils/JoiValidations";

const qtdeAtivosMiddleware = async (req: Request, _res: Response, next: NextFunction) => {
  const { codAtivo, qtdeAtivo } = req.body;
  const { qtdeDisponivel, codMercado } = await acoesService.getStockByCode(codAtivo);
  const {error} = Joi.JoiValidations.validate(req.body);
  if(error) {
    next({ status: 400, response: error.details[0].message })
  }
  if(qtdeAtivo > qtdeDisponivel) {
    next(
      { status: 409,
        response: `Ativo indisponível para compra nessa quantidade.
        Quantidade disponível para ${codMercado} é de ${qtdeDisponivel} lotes.`
      })
    }
    next()
  }

  const qtdeDisponivelConta = async (req: Request, _res: Response, next: NextFunction) => {
    const { codCliente, codAtivo, qtdeAtivo } = req.body;
    const {saldoConta} = await clientesService.getClientByCode(codCliente);
    const {valorAtivo} = await acoesService.getStockByCode(codAtivo);
    const {error} = Joi.JoiValidations.validate(req.body);
    const valorCompra = Number(qtdeAtivo) * Number(valorAtivo);
    if(error) {
      next({
        status: 400,
        response: error.details[0].message
      })
    }
    if(valorCompra > saldoConta) {
      next( {
        status: 406,
        response: 'Compra não autorizada, saldo em conta insuficiente.'
      })
    }
      next()
    }

  const investimentByClient = async (req: Request, _res: Response, next: NextFunction) => {
    const {codCliente} = req.params;
    const {error} = Joi.JoiValidationsCodClient.validate(req.params);
    const result = await investimentosService.getInvestimentByClient(+codCliente);
    if(error?.details[0].message.includes('number' || 'greater')) {
      next({
        status: 404,
        response: 'O código do cliente deve ser um número maior que 0.'
      })
    }
    if(result.length === 0) {
      next({
        status: 404, 
        response: 'Nenhum investimento encontrado para conta informada.'
      })
    }
    next()
  };


export default {
  qtdeAtivosMiddleware,
  qtdeDisponivelConta,
  investimentByClient,
};