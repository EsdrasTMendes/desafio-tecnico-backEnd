import { Request, Response } from "express";
import service from '../service/investimentos.service';

const getAllInvestiments = async (req: Request, res: Response): Promise<Response> => {
  const wallets = await service.getAllInvestiments();
  return res.status(200).json(wallets);
};

const createInvestiment = async (req: Request, res: Response): Promise<Response> => {
  const {status, response} = await service.createInvestiment(req.body);
  return res.status(status).json(response)
};

export default {
  getAllInvestiments,
  createInvestiment,
}