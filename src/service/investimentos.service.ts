import model from '../models/investimentos.model'
import IInvestimentos from '../interfaces/IInvestimentos';
import IcreateInvestiment from '../interfaces/ICreateInvestiment';
import buyOrdersUpdateValues from '../utils/buyOrdersUpdateValues';
import sellOrdersUpdateValues from '../utils/sellOrdersUpdateValues';
import investimentBuilder from '../utils/InvestimentBuilder';

const getAllInvestiments = async (): Promise<IInvestimentos[]> => {
  const result = await model.getAllInvestiments();
  return result
};

const getInvestimentByClient = async (codCliente: number): Promise <IInvestimentos[]> => {
  const result = await model.getInvestimentByClient(codCliente)
  return result
};

const createInvestiment = async ({ codCliente, codAtivo, qtdeAtivo }: IInvestimentos): Promise <IcreateInvestiment> => {
  const [investiment] = await model.getInvestimentByClientAndAsset(codCliente, codAtivo);
  if(!investiment) {
    const {insertId} = await model.createInvestiment(codCliente, codAtivo, qtdeAtivo);
    buyOrdersUpdateValues(codCliente, codAtivo, qtdeAtivo);
    const result = investimentBuilder(codCliente, codAtivo, qtdeAtivo);
    return {
      status: 200,
      response: result,
    }
  };

  const newqtdeAtivos = Number(Number(investiment.qtdeAtivo) + Number(qtdeAtivo));
  const update = await model.updateInvestiment(newqtdeAtivos, investiment.id);
  buyOrdersUpdateValues(codCliente, codAtivo, qtdeAtivo);
  const result = investimentBuilder(codCliente, codAtivo, newqtdeAtivos);
  return {
    status: 200,
    response: result,
  }
};

const sellInvestiment = async({ codCliente, codAtivo, qtdeAtivo }: IInvestimentos): Promise<IcreateInvestiment> => {
  const [investiment] = await model.getInvestimentByClientAndAsset(codCliente, codAtivo);
  if(investiment.qtdeAtivo == qtdeAtivo) {
    const update = await model.deleteInvestiment(codCliente, codAtivo);
    sellOrdersUpdateValues(codCliente, codAtivo, qtdeAtivo);
    const result = investimentBuilder(codCliente, codAtivo, qtdeAtivo);
    return {
      status: 200,
      response: result,
    }
  };

  const newqtdeAtivos = Number(investiment.qtdeAtivo) - Number(qtdeAtivo); 
  const update = await model.updateInvestiment(newqtdeAtivos, investiment.id)
  sellOrdersUpdateValues(codCliente, codAtivo, qtdeAtivo);
  const result = investimentBuilder(codCliente, codAtivo, qtdeAtivo);
  return {
    status: 200,
    response: result,
  }
};

export default {
  getAllInvestiments,
  createInvestiment,
  getInvestimentByClient,
  sellInvestiment,
}