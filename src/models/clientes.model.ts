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

export default {
  getAllClients,
}