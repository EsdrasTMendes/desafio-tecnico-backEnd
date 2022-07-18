import model from '../models/posicaoCorretoras.model'
import IPosicaoCorretoras from '../interfaces/IPosicaoCorretoras';

const getAllPositions = async (): Promise<IPosicaoCorretoras[]> => {
  const result = await model.getAllPositions();
  return result
};

export default {
  getAllPositions,
}