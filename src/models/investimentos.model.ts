import connection from "./connection";
import IInvestimentos from "../interfaces/IInvestimentos";
import IUpdate from "../interfaces/IUpdate";
import { ResultSetHeader } from "mysql2";

const getInvestimentByClient = async (codCliente: number): Promise<IInvestimentos[]> => {
  const [result] = await connection.execute(
    `SELECT
    i.cod_cliente AS CodCliente,
    i.cod_ativo AS CodAtivo,
    i.qtd_ativo AS QtdeAtivo, 
    a.valor_ativo AS Valor 
    FROM 
    StockmarketXP.investimentos AS i
    INNER JOIN StockmarketXP.acoes AS a
    ON i.cod_ativo = a.cod_ativo
    WHERE i.cod_cliente = ?`,
    [codCliente]
  )
  return result as IInvestimentos[]
}

const getInvestimentByClientAndAsset = async (codCliente: number, codAtivo: number): Promise<IInvestimentos[]> =>  {
  const [result] = await connection.execute(
    `SELECT id, cod_cliente AS codCliente, cod_ativo AS codAtivo,
    qtd_ativo AS qtdeAtivo FROM 
    StockmarketXP.investimentos WHERE cod_cliente = ? AND cod_ativo = ?`,
    [codCliente, codAtivo]
  )
  return result as IInvestimentos[]
}

const updateInvestiment = async (qtdeAtivo: number, id: number): Promise<IUpdate> => {
  const [result] = await connection.execute<ResultSetHeader>(
    `UPDATE investimentos SET qtd_ativo = ? WHERE id= ?`,
    [qtdeAtivo, id]
  )
  return {
    message: 'Operação realizada com sucesso'
  }
}

const createInvestiment = async (codCliente: number, codAtivo: number, qtdeAtivo: number): Promise<IUpdate> => {
  const [result] = await connection.execute<ResultSetHeader>(
    `INSERT INTO investimentos(cod_cliente, cod_ativo, qtd_ativo)
    VALUES (?,?,?)`,
    [codCliente, codAtivo, qtdeAtivo]
  )
  return {
    message: 'Operação realizada com sucesso'
  }
};

const deleteInvestiment = async (codCliente: number, codAtivo: number): Promise<IUpdate> => {
  const [result] = await connection.execute<ResultSetHeader>(
    `DELETE FROM investimentos WHERE cod_cliente = ? AND cod_ativo = ?`,
    [codCliente, codAtivo]
  );
  return {
    message: 'Operação realizada com sucesso'
  }
};

export default {
  createInvestiment,
  getInvestimentByClient,
  getInvestimentByClientAndAsset,
  updateInvestiment,
  deleteInvestiment,
}