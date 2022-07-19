import model from '../models/investimentos.model'
import IInvestimentos from '../interfaces/IInvestimentos';
import IcreateInvestiment from '../interfaces/ICreateInvestiment';
import buyOrder from '../utils/buyOrder';

const getAllInvestiments = async (): Promise<IInvestimentos[]> => {
  const result = await model.getAllInvestiments();
  return result
};

const getInvestimentByClient = async (codCliente: number): Promise <IInvestimentos[]> => {
  const result = await model.getInvestimentByClient(codCliente)
  return result
}

const createInvestiment = async ({ codCliente, codAtivo, qtdeAtivo }: IInvestimentos): Promise <IcreateInvestiment> => {
  const {insertId} = await model.createInvestiment(codCliente, codAtivo, qtdeAtivo);
  buyOrder(codCliente, codAtivo, qtdeAtivo);
  const result = {
    id: insertId,
    codCliente,
    codAtivo,
    qtdeAtivo
  }
  return {
    status: 200,
    response: result,
  }
};


export default {
  getAllInvestiments,
  createInvestiment,
  getInvestimentByClient,
}