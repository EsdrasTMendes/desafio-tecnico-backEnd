import connection from "./connection";
import IAcoes from "../interfaces/IAcoes";


const getAllStocks = async (): Promise<IAcoes[]> => {
  const [result] = await connection.execute(
    'SELECT cod_ativo AS codAtivo, cod_mercado as codMercado, valor_ativo AS valorAtivo, qtde_disponivel AS qtdeDisponivel FROM StockmarketXP.acoes',
  )
  return result as IAcoes[];
};

const getStockByCode = async (codAtivo: number): Promise<IAcoes[]> => {
  const [result] = await connection.execute(
    `SELECT cod_ativo AS codAtivo, cod_mercado as codMercado, valor_ativo AS valorAtivo, qtde_disponivel AS qtdeDisponivel
    FROM StockmarketXP.acoes WHERE cod_ativo = ?`,
    [codAtivo]
  );
  return result as IAcoes[];
}
export default {
  getAllStocks,
  getStockByCode,
}