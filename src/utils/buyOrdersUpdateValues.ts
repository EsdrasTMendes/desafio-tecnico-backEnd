import acoesService from "../service/acoes.service";
import clientesService from "../service/clientes.service";
import orderBuilder from "./orderBuilder";

const buyOrdersUpdateValues = async ( codCliente: number, codAtivo: number, qtdeAtivo: number ) => {
  const {valorAtivo, qtdeDisponivel} = await acoesService.getStockByCode(codAtivo);
  const {saldoConta, saldoCustodia} = await clientesService.getClientByCode(codCliente)
  const valorCompra = valorAtivo * qtdeAtivo;
  const novosaldoCustodia = valorCompra + +saldoCustodia;
  const novoSaldo = saldoConta - valorCompra;
  const uptadeClient = orderBuilder(codCliente,novosaldoCustodia, novoSaldo)
  const novaQtdeAtivo = qtdeDisponivel - qtdeAtivo;
  acoesService.updateByCode(novaQtdeAtivo, codAtivo);
  clientesService.updateClientByCode(uptadeClient);
};

export default buyOrdersUpdateValues;