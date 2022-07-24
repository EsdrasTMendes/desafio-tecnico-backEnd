import connection from "./connection";
import IAcoes from "../interfaces/IAcoes";
import IUpdate from "../interfaces/IUpdate";
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

const updateByCode = async (qtdeDisponivel: number, codAtivo: number): Promise<IUpdate> => {
  const [result] = await connection.execute<ResultSetHeader>(
    `UPDATE acoes SET qtde_disponivel = ? WHERE cod_ativo = ?`,
    [qtdeDisponivel, codAtivo]
  );
  return {
    message: 'Operação realizada com sucesso'
  }
}

const createAssets = async (codMercado: string, valorAtivo: number, qtdeDisponivel: number): Promise<IUpdate> => {
  const [result] = await connection.execute<ResultSetHeader>(
    `INSERT INTO acoes (cod_mercado, valor_ativo, qtde_disponivel) values (?, ?, ?)`,
    [codMercado, valorAtivo, qtdeDisponivel]
  );
  return {
    message: 'Ativo adicionado com sucesso'
  }
};


export default {
  getAllStocks,
  getStockByCode,
  updateByCode,
  createAssets
}