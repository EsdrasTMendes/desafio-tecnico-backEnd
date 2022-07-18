import connection from "./connection";
import ICarteiras from "../interfaces/ICarteiras";


const getAllWallets = async (): Promise<ICarteiras[]> => {
  const [result] = await connection.execute(
    `SELECT id AS carteiraId, cliente_id AS clienteId, ativo_id AS ativoId,
    qtd_ativo_custodia AS qtdAtivoCustodia, corretora_id AS corretoraId FROM 
    StockmarketXP.carteiras`,
  )
  return result as ICarteiras[];
};

export default {
  getAllWallets,
}