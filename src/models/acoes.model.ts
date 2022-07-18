import connection from "./connection";
import IAcoes from "../interfaces/IAcoes";


const getAllStocks = async (): Promise<IAcoes[]> => {
  const [result] = await connection.execute(
    'SELECT ativo_id AS ativoId, cod_ativo AS codAtivo, valor_ativo AS valorAtivo FROM StockmarketXP.acoes',
  )
  return result as IAcoes[];
};

const getStockById = async (codId: number): Promise<{}> => {
  const [result] = await connection.execute(
    `SELECT ativo_id AS ativoId, cod_ativo AS codAtivo, valor_ativo AS valorAtivo 
    FROM StockmarketXP.acoes WHERE ativo_id = ?`,
    [codId]
  );
  return result;
}
export default {
  getAllStocks,
  getStockById,
}