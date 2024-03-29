import model from '../models/acoes.model'
import IAcoes from '../interfaces/IAcoes';
import IUpdate from '../interfaces/IUpdate';
import IUpdateAcoes from '../interfaces/IUpdateAcoes';
import ICreateAcoes from '../interfaces/ICreateAcoes';

const getAllStocks = async (): Promise<IAcoes[]> => {
  const result = await model.getAllStocks();
  return result
};

const getStockByCode = async (codAtivo: number): Promise<IAcoes> => {
  const [result] = await model.getStockByCode(codAtivo);
  return result;
}

const updateByCode = async (qtdeAtivo:number, codAtivo:number): Promise<IUpdate> => {
  const result = await model.updateByCode(qtdeAtivo, codAtivo);
  return result;
}

const createAssets = async({codMercado, valorAtivo, qtdeDisponivel}: ICreateAcoes): Promise<IUpdateAcoes> => {
  const result = await model.createAssets(codMercado, valorAtivo, qtdeDisponivel);
  return {
    status: 200,
    response: 'Ativo adidionado com sucesso.'
  }
}

export default {
  getAllStocks,
  getStockByCode,
  updateByCode,
  createAssets
}