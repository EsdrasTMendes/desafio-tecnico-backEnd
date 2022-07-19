import connection from "./connection";
import IClientes from "../interfaces/IClientes";


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

export default {
  getAllClients,
  getClientsByCode,
}