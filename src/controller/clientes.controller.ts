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
export default {
  getAllClients,
  getClientByCode,
}