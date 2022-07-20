import model from '../models/clientes.model'
import IClientes from '../interfaces/IClientes';
import { ResultSetHeader } from 'mysql2';
import IMovimentacoes from '../interfaces/IMovimentacoes';

const getAllClients = async (): Promise<IClientes[]> => {
  const result = await model.getAllClients();
  return result;
};
const getClientByCode = async (codCliente: number): Promise<IClientes> => {
  const [client] = await model.getClientsByCode(codCliente);
  return client;
};
const updateClientByCode = async ({ codCliente, saldoConta, saldoCustodia}: IClientes): Promise<ResultSetHeader|undefined> => {
  const result = await model.updateClientByCode(codCliente, saldoConta, saldoCustodia )
  return result;
}

const withdrawByCode = async  ({CodCliente, Valor }: IMovimentacoes): Promise<ResultSetHeader> => {
  const [client] = await model.getClientsByCode(CodCliente);
    const newValueConta = Number(client.saldoConta) - Number(Valor);
    const result = await model.withdrawAndDepositByCode(CodCliente, newValueConta);
    console.log(result);
    return result;
};

const depositByCode = async ({CodCliente, Valor} : IMovimentacoes): Promise<ResultSetHeader> => {
  const [client] = await model.getClientsByCode(CodCliente);
  const newValueConta = Number(client.saldoConta) + Number(Valor);
  const result = await model.withdrawAndDepositByCode(CodCliente, newValueConta);
  console.log(result);
  return result;
}

export default {
  getAllClients,
  getClientByCode,
  updateClientByCode,
  withdrawByCode,
  depositByCode,
}