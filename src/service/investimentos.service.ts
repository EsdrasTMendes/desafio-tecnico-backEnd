import model from '../models/investimentos.model'
import IInvestimentos from '../interfaces/IInvestimentos';
import IcreateInvestiment from '../interfaces/ICreateInvestiment';
import { ResultSetHeader } from 'mysql2';

const getAllInvestiments = async (): Promise<IInvestimentos[]> => {
  const result = await model.getAllInvestiments();
  return result
};



const createInvestiment = async ({ codCliente, codAtivo, qtdeAtivo }: IInvestimentos): Promise <IcreateInvestiment> => {
  const {insertId} = await model.createInvestiment(codCliente, codAtivo, qtdeAtivo);
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