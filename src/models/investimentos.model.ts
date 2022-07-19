import connection from "./connection";
import IInvestimentos from "../interfaces/IInvestimentos";
import { ResultSetHeader } from "mysql2";


const getAllInvestiments = async (): Promise<IInvestimentos[]> => {
  const [result] = await connection.execute(
    `SELECT id, cod_cliente AS codCliente, cod_ativo AS codAtivo,
    qtd_ativo AS qtdeAtivo FROM 
    StockmarketXP.investimentos`,
  )
  return result as IInvestimentos[];
};

const createInvestiment = async (codCliente: number, codAtivo: number, qtdeAtivo: number): Promise<ResultSetHeader> => {
  const [result] = await connection.execute<ResultSetHeader>(
    `INSERT INTO investimentos(cod_cliente, cod_ativo, qtd_ativo)
    VALUES (?,?,?)`,
    [codCliente, codAtivo, qtdeAtivo]
  )
  return result
};

export default {
  getAllInvestiments,
  createInvestiment,
}