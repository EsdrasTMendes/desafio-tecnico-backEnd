import connection from "./connection";
import IClientes from "../interfaces/IClientes";


const getAllClients = async (): Promise<IClientes[]> => {
  const [result] = await connection.execute(
    `SELECT cliente_id AS clienteId, nome_cliente AS nomeCliente, cod_cliente AS codCliente,
    saldo_conta AS saldoConta, saldo_custodia AS saldoCustodia, corretora_id AS corretoraId FROM 
    StockmarketXP.clientes`,
  )
  return result as IClientes[];
};

const getClientsByCode = async (codCliente: number): Promise<{}> => {
  const [result] = await connection.execute(
    `SELECT cliente_id AS clienteId, nome_cliente AS nomeCliente, cod_cliente AS codCliente,
    saldo_conta AS saldoConta, saldo_custodia AS saldoCustodia, corretora_id AS corretoraId FROM 
    StockmarketXP.clientes WHERE cod_cliente = ?`,
    [codCliente]
  );
  return result
};

export default {
  getAllClients,
  getClientsByCode,
}