import model from '../models/investimentos.model'
import acoesService from './acoes.service';
import clientesService from './clientes.service';
import IInvestimentos from '../interfaces/IInvestimentos';
import IcreateInvestiment from '../interfaces/ICreateInvestiment';
import orderBuilder from '../utils/orderBuilder';

const getAllInvestiments = async (): Promise<IInvestimentos[]> => {
  const result = await model.getAllInvestiments();
  return result
};



const createInvestiment = async ({ codCliente, codAtivo, qtdeAtivo }: IInvestimentos): Promise <IcreateInvestiment> => {
  const {insertId} = await model.createInvestiment(codCliente, codAtivo, qtdeAtivo);
  const {valorAtivo} = await acoesService.getStockByCode(codAtivo);
  const {saldoConta} = await clientesService.getClientByCode(codCliente)
  const saldoCustodia = valorAtivo * qtdeAtivo;
  const novoSaldo = saldoConta - saldoCustodia;
  const uptadeClient = orderBuilder(codCliente,saldoCustodia, novoSaldo)
  acoesService.updateByCode(qtdeAtivo, codAtivo);
  clientesService.updateClientByCodeBuy(uptadeClient);
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