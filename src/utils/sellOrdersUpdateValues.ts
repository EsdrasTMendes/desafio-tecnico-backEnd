import acoesService from "../service/acoes.service";
import clientesService from "../service/clientes.service";
import orderBuilder from "./orderBuilder";

const sellOrdersUpdateValues = async ( codCliente: number, codAtivo: number, qtdeAtivo: number ) => {
  const acao = await acoesService.getStockByCode(codAtivo);
  const {saldoConta, saldoCustodia} = await clientesService.getClientByCode(codCliente);
  const saldoVenda = Number(acao.valorAtivo) * Number(qtdeAtivo);
  const novoSaldoCustodia = Number(saldoCustodia) - Number(saldoVenda);
  const novoSaldoConta = Number(saldoConta) + Number(saldoVenda);
  const novaQtdeAtivo = Number(acao.qtdeDisponivel) + Number(qtdeAtivo);
  const uptadeClient = orderBuilder(codCliente, novoSaldoCustodia, novoSaldoConta);
  acoesService.updateByCode(novaQtdeAtivo, codAtivo);
  clientesService.updateClientByCode(uptadeClient);
};

export default sellOrdersUpdateValues;