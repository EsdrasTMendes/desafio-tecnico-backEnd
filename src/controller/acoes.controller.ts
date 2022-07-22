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

const createAssets = async (req: Request, res: Response): Promise<Response> => {
  const {status, response} = await service.createAssets(req.body);
  return res.status(status).json(response);
};

export default {
  getAllStocks,
  getStockByCode,
  createAssets
}