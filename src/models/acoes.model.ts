import connection from "./connection";
import IAcoes from "../interfaces/IAcoes";


const getAllStocks = async (): Promise<IAcoes[]> => {
  const [result] = await connection.execute(
    'SELECT ativo_id AS ativoId, cod_ativo AS codAtivo, valor_ativo AS valorAtivo FROM StockmarketXP.acoes',
  )
  return result as IAcoes[];
};

export default {
  getAllStocks,
}