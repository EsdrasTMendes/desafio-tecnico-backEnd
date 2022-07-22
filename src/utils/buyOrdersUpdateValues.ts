import acoesService from "../service/acoes.service";
import clientesService from "../service/clientes.service";
import orderBuilder from "./orderBuilder";

const buyOrdersUpdateValues = async ( codCliente: number, codAtivo: number, qtdeAtivo: number ) => {
  const {valorAtivo, qtdeDisponivel} = await acoesService.getStockByCode(codAtivo);
  const {saldoConta, saldoCustodia} = await clientesService.getClientByCode(codCliente)
  const valorCompra = Number(valorAtivo) * Number(qtdeAtivo);
  const novosaldoCustodia = Number(valorCompra) + Number(saldoCustodia);
  const novoSaldo = Number(saldoConta) - Number(valorCompra);
  const novaQtdeAtivo = Number(qtdeDisponivel) - Number(qtdeAtivo);
  const uptadeClient = orderBuilder(codCliente,novosaldoCustodia, novoSaldo)
  acoesService.updateByCode(novaQtdeAtivo, codAtivo);
  clientesService.updateClientByCode(uptadeClient);
};

export default buyOrdersUpdateValues;