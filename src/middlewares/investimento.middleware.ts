import { Request, Response, NextFunction } from "express";
import acoesService from "../service/acoes.service";

const qtdeAtivosMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { codCliente, codAtivo, qtdeAtivo } = req.body;
  const { qtdeDisponivel } = await acoesService.getStockByCode(codAtivo);

  if(qtdeAtivo > qtdeDisponivel) {
    return res.status(409).json({ message: `ativo indisponível para compra nessa quantidade, 
      quantidade disponível: ${qtdeDisponivel}`})
    }
    next()
  }
export default qtdeAtivosMiddleware;