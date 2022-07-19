import model from '../models/investimentos.model'
import acoesService from './acoes.service';
import IInvestimentos from '../interfaces/IInvestimentos';
import IcreateInvestiment from '../interfaces/ICreateInvestiment';

const getAllInvestiments = async (): Promise<IInvestimentos[]> => {
  const result = await model.getAllInvestiments();
  return result
};



const createInvestiment = async ({ codCliente, codAtivo, qtdeAtivo }: IInvestimentos): Promise <IcreateInvestiment> => {
  const {insertId} = await model.createInvestiment(codCliente, codAtivo, qtdeAtivo);
  acoesService.updateByCode(qtdeAtivo, codAtivo);
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
}