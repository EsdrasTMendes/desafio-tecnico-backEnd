import connection from "./connection";
import ICarteiras from "../interfaces/ICarteiras";
import { ResultSetHeader } from "mysql2";


const getAllWallets = async (): Promise<ICarteiras[]> => {
  const [result] = await connection.execute(
    `SELECT id AS carteiraId, cliente_id AS clienteId, ativo_id AS ativoId,
    qtd_ativo_custodia AS qtdAtivoCustodia, corretora_id AS corretoraId FROM 
    StockmarketXP.carteiras`,
  )
  return result as ICarteiras[];
};

const createNewWallet = async (obj:ICarteiras): Promise<ResultSetHeader> => {
  const [rows] = await connection.execute(
    'INSERT INTO StockmarketXP.carteiras VALUES(cliente_id, ativo_id, qtd_ativo, corretora_id) (?,?,?,?)',
    [obj.clienteId, obj.clienteId, obj.qtdAtivo, obj.corretoraId]
  )
  return rows as ResultSetHeader;
};

export default {
  getAllWallets,
  createNewWallet,
}