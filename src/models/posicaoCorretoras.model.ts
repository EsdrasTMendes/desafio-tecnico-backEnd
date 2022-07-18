import connection from "./connection";
import IPosicaoCorretoras from "../interfaces/IPosicaoCorretoras";

const getAllPositions = async (): Promise<IPosicaoCorretoras[]> => {
  const [result] = await connection.execute(
    `SELECT corretora_id AS corretoraId, ativo_id AS ativoId, qtd_disponivel AS qtdDisponivel
    FROM StockmarketXP.posicao_corretoras`,
  )
  return result as IPosicaoCorretoras[];
};
export default {
  getAllPositions,
}