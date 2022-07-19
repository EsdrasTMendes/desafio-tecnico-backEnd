import IInvestimentos from "../interfaces/IInvestimentos";
import acoesService from "../service/acoes.service";
import clientesService from "../service/clientes.service";
import orderBuilder from "./orderBuilder";

const buyOrder = async ( codCliente: number, codAtivo: number, qtdeAtivo: number ) => {
  const {valorAtivo} = await acoesService.getStockByCode(codAtivo);
  const {saldoConta} = await clientesService.getClientByCode(codCliente)
  const saldoCustodia = valorAtivo * qtdeAtivo;
  const novoSaldo = saldoConta - saldoCustodia;
  const uptadeClient = orderBuilder(codCliente,saldoCustodia, novoSaldo)
  acoesService.updateByCode(qtdeAtivo, codAtivo);
  clientesService.updateClientByCode(uptadeClient);
};

export default buyOrder;