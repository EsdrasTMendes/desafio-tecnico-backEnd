import { Request, Response } from "express";
import service from '../service/carteiras.service';

const getAllWallets = async (req: Request, res: Response): Promise<Response> => {
  const wallets = await service.getAllWallets();
  return res.status(200).json(wallets);
};

export default {
  getAllWallets
}