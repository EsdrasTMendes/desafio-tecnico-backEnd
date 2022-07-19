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
const updateByCode = async (qtdeAtivo:number, codAtivo:number) => {
  const {qtdeDisponivel} = await getStockByCode(codAtivo);
  const qtdeDisponivelAtual = qtdeDisponivel - qtdeAtivo;
  const result = await model.updateByCode(qtdeDisponivelAtual, codAtivo);
}

export default {
  getAllStocks,
  getStockByCode,
  updateByCode,
}