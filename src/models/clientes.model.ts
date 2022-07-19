import connection from "./connection";
import IClientes from "../interfaces/IClientes";
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

const updateClientByCodeBuy = async (codCliente:number, saldoCustodia: number, saldoConta: number): Promise<ResultSetHeader|undefined> => {
    const [result] = await connection.execute<ResultSetHeader>(
      `UPDATE clientes SET saldo_custodia = ?, saldo_conta = ? WHERE cod_cliente = ?`,
      [saldoCustodia, saldoConta, codCliente]
    );
    return result
}

// if(operacao ==='venda') {
//   const [result] = await connection.execute<ResultSetHeader>(
//     `UPDATE clientes SET saldo_conta = ? WHERE cod_cliente = ?`,
//     [saldoCustodia, codCliente]
//   );
//   return result
// }

const withdrawAndDepositByCode = async (codCliente:number, valor: number, operacao: string): Promise<ResultSetHeader| undefined> => {
  if(operacao === 'saque') {
    const [result] = await connection.execute<ResultSetHeader>(
      `UPDATE clientes SET saldo_conta = ? WHERE cod_cliente = ?`,
      [valor, codCliente]
    );
    return result
  }
  if(operacao ==='deposito') {
    const [result] = await connection.execute<ResultSetHeader>(
      `UPDATE clientes SET saldo_conta = ? WHERE cod_cliente = ?`,
      [valor, codCliente]
    );
    return result
  }
}

export default {
  getAllClients,
  getClientsByCode,
  updateClientByCodeBuy,
  withdrawAndDepositByCode,
}