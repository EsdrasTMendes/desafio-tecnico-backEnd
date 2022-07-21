import acoesService from "../service/acoes.service";
import clientesService from "../service/clientes.service";
import orderBuilder from "./orderBuilder";

const sellOrdersUpdateValues = async ( codCliente: number, codAtivo: number, qtdeAtivo: number ) => {
  const acao = await acoesService.getStockByCode(codAtivo);
  const {saldoConta, saldoCustodia} = await clientesService.getClientByCode(codCliente);
  const saldoVenda = acao.valorAtivo * qtdeAtivo;
  const novoSaldoCustodia = +saldoCustodia - saldoVenda;
  const novoSaldoConta = +saldoConta + saldoVenda;
  const uptadeClient = orderBuilder(codCliente, novoSaldoCustodia, novoSaldoConta);
  const novaQtdeAtivo = +acao.qtdeDisponivel + qtdeAtivo;
  acoesService.updateByCode(novaQtdeAtivo, codAtivo);
  clientesService.updateClientByCode(uptadeClient);
};

export default sellOrdersUpdateValues;