import { Request, Response } from "express";
import service from '../service/investimentos.service';

const createInvestiment = async (req: Request, res: Response): Promise<Response> => {
  const {status, response} = await service.createInvestiment(req.body);
  return res.status(status).json(response)
};

const getInvestimentByClient = async (req: Request, res: Response): Promise<Response> => {
  const {codCliente} = req.params;
  const result = await service.getInvestimentByClient(+codCliente)
  return res.status(200).json(result);
}

const sellInvestiment = async (req: Request, res: Response): Promise<Response> => {
  const {status, response} = await service.sellInvestiment(req.body);
  return res.status(status).json(response)
};

export default {
  createInvestiment,
  getInvestimentByClient,
  sellInvestiment,
}