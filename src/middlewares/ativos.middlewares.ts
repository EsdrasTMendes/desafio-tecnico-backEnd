import { Request, Response, NextFunction } from "express";
import acoesService from "../service/acoes.service";

const ativoMiddleware = async (req: Request, _res: Response, next: NextFunction) => {
  const {codAtivo} = req.params;
  const result = await acoesService.getStockByCode(+codAtivo);
  if(!result) {
    next({
      status: 404,
      response: 'Ativo não encontrado.'
    })
  }
  next()
};

export default ativoMiddleware;