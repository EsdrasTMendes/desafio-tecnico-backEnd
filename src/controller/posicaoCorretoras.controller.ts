import { Request, Response } from "express";
import service from '../service/posicaoCorretoras.service';

const getAllPositions = async (req: Request, res: Response): Promise<Response> => {
  const positions = await service.getAllPositions();
  return res.status(200).json(positions);
};

export default {
  getAllPositions,
}