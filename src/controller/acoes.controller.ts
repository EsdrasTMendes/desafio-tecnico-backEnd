import { Request, Response } from "express";
import service from '../service/acoes.service';

const getAllStocks = async (req: Request, res: Response): Promise<Response> => {
  const stocks = await service.getAllStocks();
  return res.status(200).json(stocks);
};

const getStockByCode = async (req: Request, res: Response): Promise<Response> => {
  const {codAtivo} = (req.params);
  const stock = await service.getStockByCode(+codAtivo);
  return res.status(200).json(stock);
};

export default {
  getAllStocks,
  getStockByCode
}