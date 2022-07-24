import model from '../models/investimentos.model'
import IInvestimentos from '../interfaces/IInvestimentos';
import IcreateInvestiment from '../interfaces/ICreateInvestiment';
import IInvestimentosCreate from '../interfaces/IIvestimentCreate';
import buyOrdersUpdateValues from '../utils/buyOrdersUpdateValues';
import sellOrdersUpdateValues from '../utils/sellOrdersUpdateValues';
import IInvestimentosGET from '../interfaces/IInvestimentGET';

const getInvestimentByClient = async (codCliente: number): Promise <IInvestimentos[]> => {
  const result = await model.getInvestimentByClient(codCliente)
  return result
};

const getInvestimentByClientAndAsset = async ({codCliente, codAtivo} : IInvestimentosGET):Promise<IInvestimentos> => {
  const [result] = await model.getInvestimentByClientAndAsset(codCliente, codAtivo);
  return result;
};

const createInvestiment = async ({ codCliente, codAtivo, qtdeAtivo }: IInvestimentosCreate): Promise <IcreateInvestiment> => {
  const [investiment] = await model.getInvestimentByClientAndAsset(codCliente, codAtivo);
  if(!investiment) {
    const {message} = await model.createInvestiment(codCliente, codAtivo, qtdeAtivo);
    buyOrdersUpdateValues(codCliente, codAtivo, qtdeAtivo);
    return {
      status: 200,
      response: {
        codCliente,
        codAtivo,
        qtdeAtivo,
      },
    }
  };

  const newqtdeAtivos = Number(Number(investiment.qtdeAtivo) + Number(qtdeAtivo));
  const update = await model.updateInvestiment(newqtdeAtivos, investiment.id as number);
  buyOrdersUpdateValues(codCliente, codAtivo, qtdeAtivo);
  return {
    status: 200,
    response: {
      codCliente,
      codAtivo,
      qtdeAtivo,
    },
  }
};

const sellInvestiment = async({ codCliente, codAtivo, qtdeAtivo }: IInvestimentos): Promise<IcreateInvestiment> => {
  const [investiment] = await model.getInvestimentByClientAndAsset(codCliente, codAtivo);
  if(investiment.qtdeAtivo == qtdeAtivo) {
    const update = await model.deleteInvestiment(codCliente, codAtivo);
    sellOrdersUpdateValues(codCliente, codAtivo, qtdeAtivo);
    return {
      status: 200,
      response: {
        codCliente,
        codAtivo,
        qtdeAtivo,
      },
    }
  };
  const newqtdeAtivos = Number(investiment.qtdeAtivo) - Number(qtdeAtivo); 
  const update = await model.updateInvestiment(newqtdeAtivos, investiment.id as number)
  sellOrdersUpdateValues(codCliente, codAtivo, qtdeAtivo);
  return {
    status: 200,
    response: {
      codCliente,
      codAtivo,
      qtdeAtivo,
    },
  }
};

export default {
  createInvestiment,
  getInvestimentByClient,
  getInvestimentByClientAndAsset,
  sellInvestiment,
}