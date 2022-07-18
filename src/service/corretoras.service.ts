import model from '../models/corretoras.model'
import ICorretoras from '../interfaces/ICorretoras';

const getAllStockBrokers = async (): Promise<ICorretoras[]> => {
  const result = await model.getAllStockBrokers();
  return result
};

export default {
  getAllStockBrokers,
}