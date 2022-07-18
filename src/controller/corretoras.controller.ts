import { Request, Response } from "express";
import service from '../service/corretoras.service';

const getAllStockBrokers = async (req: Request, res: Response): Promise<Response> => {
  const stockBrokers = await service.getAllStockBrokers();
  return res.status(200).json(stockBrokers);
};

export default {
  getAllStockBrokers,
}