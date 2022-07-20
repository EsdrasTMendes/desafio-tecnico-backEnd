import { Request, Response } from "express";
import service from '../service/clientes.service';

const getAllClients = async (req: Request, res: Response): Promise<Response> => {
  const clients = await service.getAllClients();
  return res.status(200).json(clients);
};

const getClientByCode = async (req: Request, res: Response): Promise<Response> => {
  const {code} = req.params;
  const client = await service.getClientByCode(+code);
  return res.status(200).json(client);
};

const depositByCode = async (req: Request, res: Response): Promise<Response> => {
  const deposit = await service.depositByCode(req.body);
  return res.status(200).json({message: 'Depósito realizado com sucesso'})
};

const withdrawByCode = async (req: Request, res: Response): Promise<Response> => {
  const deposit = await service.withdrawByCode(req.body);
  return res.status(200).json({message: 'Saque realizado com sucesso'})
};
export default {
  getAllClients,
  getClientByCode,
  depositByCode,
  withdrawByCode,
}