import connection from "./connection";
import IClientes from "../interfaces/IConta";
import IClientJWT from "../interfaces/IClientJWT";
import IUpdate from "../interfaces/IUpdate";

const getClientsByCode = async (codCliente: number): Promise<IClientes[]> => {
  const [result] = await connection.execute(
    `SELECT cod_cliente AS codCliente, nome_cliente AS nomeCliente, saldo_conta AS saldoConta,
    saldo_custodia AS saldoCustodia FROM StockmarketXP.clientes WHERE cod_cliente = ?`,
    [codCliente]
  );
  return result as IClientes[]
};

const getClientByEmailAndPassword = async(emailCliente: string, passwordCliente: string): Promise<IClientJWT[]> => {
  const [result] = await connection.execute(
    `SELECT cod_cliente AS codCliente, email_cliente AS emailCliente, nome_cliente AS nomeCliente, saldo_conta AS saldoConta,
    saldo_custodia AS saldoCustodia FROM StockmarketXP.clientes WHERE email_cliente = ? AND password_cliente = ?`,
    [emailCliente, passwordCliente]
  )
  return result as IClientJWT[]
};

const updateClientByCode = async (codCliente:number, saldoCustodia: number, saldoConta: number): Promise<IUpdate> => {
    const [result] = await connection.execute(
      `UPDATE clientes SET saldo_custodia = ?, saldo_conta = ? WHERE cod_cliente = ?`,
      [saldoCustodia, saldoConta, codCliente]
    );
    
    return {
      message: 'Cliente atualizado com sucesso'
    }
}

const getClientByEmail = async(emailCliente: string, ): Promise<IClientJWT[]> => {
  const [result] = await connection.execute(
    `SELECT cod_cliente AS codCliente, email_cliente AS emailCliente, nome_cliente AS nomeCliente, saldo_conta AS saldoConta,
    saldo_custodia AS saldoCustodia FROM StockmarketXP.clientes WHERE email_cliente = ? `,
    [emailCliente]
  )
  return result as IClientJWT[]
};

const withdrawAndDepositByCode = async (codCliente:number, valor: number): Promise<IUpdate> => {
    const [result] = await connection.execute(
      `UPDATE clientes SET saldo_conta = ? WHERE cod_cliente = ?`,
      [valor, codCliente]
    );
    return {
      message: 'Operação realizada com sucesso'
    }
}

const createClient = async (nomeCliente: string, emailCliente: string, saldoConta: number, saldoCustodia: number, passwordCliente: string): Promise<IUpdate> => {
  const [result] = await connection.execute(
    `INSERT INTO clientes(nome_cliente, email_cliente, saldo_conta, saldo_custodia, password_cliente) values (?, ?, ?, ?, ?)`,
    [nomeCliente, emailCliente, saldoConta, saldoCustodia, passwordCliente]
  );
  return {
    message: 'Cadastro criado com sucesso.'
  }
}

export default {
  getClientsByCode,
  updateClientByCode,
  withdrawAndDepositByCode,
  createClient,
  getClientByEmailAndPassword,
  getClientByEmail,
}