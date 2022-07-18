import { Request, Response } from "express";
import service from '../service/acoes.service';

const getAllStocks = async (req: Request, res: Response): Promise<Response> => {
  const stocks = await service.getAllStocks();
  return res.status(200).json(stocks);
};

export default {
  getAllStocks
}