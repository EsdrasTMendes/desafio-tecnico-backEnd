import { Request, Response, NextFunction } from "express";
import acoesService from "../service/acoes.service";
import clientesService from "../service/clientes.service";

const qtdeAtivosMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { codCliente, codAtivo, qtdeAtivo } = req.body;
  const { qtdeDisponivel } = await acoesService.getStockByCode(codAtivo);

  if(qtdeAtivo > qtdeDisponivel) {
    return res.status(409).json({ message: `ativo indisponível para compra nessa quantidade. Quantidade disponível: ${qtdeDisponivel}`})
    }
    next()
  }

  const qtdeDisponivelConta = async (req: Request, res: Response, next: NextFunction) => {
    const { codCliente, codAtivo, qtdeAtivo } = req.body;
    const {saldoConta} = await clientesService.getClientByCode(codCliente);
    const {valorAtivo} = await acoesService.getStockByCode(codAtivo);
    const valorCompra = qtdeAtivo * valorAtivo;
    if(valorCompra > saldoConta) {
      return res.status(406).json({message: 'Compra não autorizada, saldo em conta insuficiente.'})
    }
      next()
    }
export default {
  qtdeAtivosMiddleware,
  qtdeDisponivelConta,
};