import connection from "./connection";
import ICorretoras from "../interfaces/ICorretoras";


const getAllStockBrokers = async (): Promise<ICorretoras[]> => {
  const [result] = await connection.execute(
    `SELECT corretora_id AS corretoraId, nome_corretora AS nomeCorretora
    FROM StockmarketXP.corretoras`,
  )
  return result as ICorretoras[];
};
export default {
  getAllStockBrokers,
}