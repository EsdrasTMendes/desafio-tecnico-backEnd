import connection from "./connection";
import IClientes from "../interfaces/IConta";
import { ResultSetHeader } from "mysql2";


const getAllClients = async (): Promise<IClientes[]> => {
  const [result] = await connection.execute(
    `SELECT cod_cliente AS codCliente, nome_cliente AS nomeCliente, saldo_conta AS saldoConta,
    saldo_custodia AS saldoCustodia FROM StockmarketXP.clientes`,
  )
  return result as IClientes[];
};

const getClientsByCode = async (codCliente: number): Promise<IClientes[]> => {
  const [result] = await connection.execute(
    `SELECT cod_cliente AS codCliente, nome_cliente AS nomeCliente, saldo_conta AS saldoConta,
    saldo_custodia AS saldoCustodia FROM StockmarketXP.clientes WHERE cod_cliente = ?`,
    [codCliente]
  );
  return result as IClientes[]
};

const updateClientByCode = async (codCliente:number, saldoCustodia: number, saldoConta: number): Promise<ResultSetHeader> => {
    const [result] = await connection.execute<ResultSetHeader>(
      `UPDATE clientes SET saldo_custodia = ?, saldo_conta = ? WHERE cod_cliente = ?`,
      [saldoCustodia, saldoConta, codCliente]
    );
    return result
}

const withdrawAndDepositByCode = async (codCliente:number, valor: number): Promise<ResultSetHeader> => {
    const [result] = await connection.execute<ResultSetHeader>(
      `UPDATE clientes SET saldo_conta = ? WHERE cod_cliente = ?`,
      [valor, codCliente]
    );
    return result
}

const createClient = async (nomeCliente: string, saldoConta: number, saldoCustodia: number): Promise<ResultSetHeader> => {
  const [result] = await connection.execute<ResultSetHeader>(
    `INSERT INTO clientes(nome_cliente, saldo_conta, saldo_custodia) values (?, ?, ?)`,
    [nomeCliente, saldoConta, saldoCustodia]
  );
  return result
}

export default {
  getAllClients,
  getClientsByCode,
  updateClientByCode,
  withdrawAndDepositByCode,
  createClient,
}