import model from '../models/clientes.model'
import IConta from '../interfaces/IConta';
import IClient from '../interfaces/IClient';
import { ResultSetHeader } from 'mysql2';
import IMovimentacoes from '../interfaces/IMovimentacoes';

const getAllClients = async (): Promise<IConta[]> => {
  const result = await model.getAllClients();
  return result;
};
const getClientByCode = async (codCliente: number): Promise<IConta> => {
  const [client] = await model.getClientsByCode(codCliente);
  return client;
};
const updateClientByCode = async ({ codCliente, saldoConta, saldoCustodia}: IConta): Promise<ResultSetHeader|undefined> => {
  const result = await model.updateClientByCode(codCliente, saldoConta, saldoCustodia )
  return result;
}

const withdrawByCode = async  ({CodCliente, Valor }: IMovimentacoes): Promise<ResultSetHeader> => {
  const [client] = await model.getClientsByCode(CodCliente);
    const newValueConta = Number(client.saldoConta) - Number(Valor);
    const result = await model.withdrawAndDepositByCode(CodCliente, newValueConta);
    return result;
};

const depositByCode = async ({CodCliente, Valor} : IMovimentacoes): Promise<ResultSetHeader> => {
  const [client] = await model.getClientsByCode(CodCliente);
  const newValueConta = Number(client.saldoConta) + Number(Valor);
  const result = await model.withdrawAndDepositByCode(CodCliente, newValueConta);
  return result;
};

const createClient = async ({nomeCliente, saldoConta, saldoCustodia}: IClient) => {
  const client = await model.createClient(nomeCliente, saldoConta, saldoCustodia);
  return {
    status: 200, 
    response: 'Cliente criado com sucesso'
  };
};

export default {
  getAllClients,
  getClientByCode,
  updateClientByCode,
  withdrawByCode,
  depositByCode,
  createClient
}