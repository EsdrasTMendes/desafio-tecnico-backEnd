import model from '../models/acoes.model'
import IAcoes from '../interfaces/IAcoes';

const getAllStocks = async (): Promise<IAcoes[]> => {
  const result = await model.getAllStocks();
  return result
};

const getStockByCode = async (codAtivo: number): Promise<IAcoes> => {
  const [result] = await model.getStockByCode(codAtivo);
  return result;
}

export default {
  getAllStocks,
  getStockByCode,
}