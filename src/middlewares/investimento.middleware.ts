import { Request, Response, NextFunction } from "express";
import acoesService from "../service/acoes.service";
import clientesService from "../service/clientes.service";

const qtdeAtivosMiddleware = async (req: Request, _res: Response, next: NextFunction) => {
  const { codAtivo, qtdeAtivo } = req.body;
  const { qtdeDisponivel, codMercado } = await acoesService.getStockByCode(codAtivo);

  if(qtdeAtivo > qtdeDisponivel) {
    const error = 
    { 
      status: 409,
      response: `Ativo indisponível para compra nessa quantidade. Quantidade disponível para ${codMercado} é de ${qtdeDisponivel} lotes`
    }
    next(error)
    }
    next()
  }

  const qtdeDisponivelConta = async (req: Request, _res: Response, next: NextFunction) => {
    const { codCliente, codAtivo, qtdeAtivo } = req.body;
    const {saldoConta} = await clientesService.getClientByCode(codCliente);
    const {valorAtivo} = await acoesService.getStockByCode(codAtivo);
    const valorCompra = qtdeAtivo * valorAtivo;
    if(valorCompra > saldoConta) {
      const error = {
        status: 406,
        response: 'Compra não autorizada, saldo em conta insuficiente.'
      }
      next(error)
    }
      next()
    }
export default {
  qtdeAtivosMiddleware,
  qtdeDisponivelConta,
};