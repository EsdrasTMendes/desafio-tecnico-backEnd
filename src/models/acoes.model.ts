import connection from "./connection";
import IAcoes from "../interfaces/IAcoes";
import { ResultSetHeader } from "mysql2";


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

const updateByCode = async (qtdeDisponivel: number, codAtivo: number): Promise<ResultSetHeader> => {
  const [result] = await connection.execute<ResultSetHeader>(
    `UPDATE acoes SET qtde_disponivel = ? WHERE cod_ativo = ?`,
    [qtdeDisponivel, codAtivo]
  );
  return result
}


export default {
  getAllStocks,
  getStockByCode,
  updateByCode,
}