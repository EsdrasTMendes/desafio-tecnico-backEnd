import model from '../models/clientes.model'
import IConta from '../interfaces/IConta';
import IUpdate from '../interfaces/IUpdate';
import IMovimentacoes from '../interfaces/IMovimentacoes';
import IClientJWT from '../interfaces/IClientJWT';

const getClientByCode = async (codCliente: number): Promise<IConta> => {
  const [client] = await model.getClientsByCode(codCliente);
  return client;
};
const updateClientByCode = async ({ codCliente, saldoConta, saldoCustodia}: IConta): Promise<IUpdate> => {
  const result = await model.updateClientByCode(codCliente, saldoConta, saldoCustodia )
  return result;
}

const withdrawByCode = async  ({CodCliente, Valor }: IMovimentacoes): Promise<IUpdate> => {
  const [client] = await model.getClientsByCode(CodCliente);
    const newValueConta = Number(client.saldoConta) - Number(Valor);
    const result = await model.withdrawAndDepositByCode(CodCliente, newValueConta);
    return result;
};

const depositByCode = async ({CodCliente, Valor} : IMovimentacoes): Promise<IUpdate> => {
  const [client] = await model.getClientsByCode(CodCliente);
  const newValueConta = Number(client.saldoConta) + Number(Valor);
  const result = await model.withdrawAndDepositByCode(CodCliente, newValueConta);
  return result;
};

const createClient = async ({nomeCliente, emailCliente, saldoConta, saldoCustodia, passwordCliente}: IClientJWT) => {
  const client = await model.createClient(nomeCliente, emailCliente, saldoConta, saldoCustodia, passwordCliente);
  return {
    status: 200, 
    response: 'Cliente criado com sucesso'
  };
};

const getClientByEmailAndPassword = async (emailCliente: string, passwordCliente: string): Promise<IClientJWT> => {
  const [client] = await model.getClientByEmailAndPassword(emailCliente, passwordCliente);
  return client
}

const getClientByEmail = async (email:string): Promise<IClientJWT> => {
  const [client] = await model.getClientByEmail(email);
  return client;
}


export default {
  getClientByCode,
  updateClientByCode,
  withdrawByCode,
  depositByCode,
  createClient,
  getClientByEmailAndPassword,
  getClientByEmail,
}