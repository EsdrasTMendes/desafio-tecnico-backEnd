import connection from "./connection";
import IInvestimentos from "../interfaces/IInvestimentos";


const getAllInvestiments = async (): Promise<IInvestimentos[]> => {
  const [result] = await connection.execute(
    `SELECT id, cod_cliente AS codCliente, cod_ativo AS codAtivo,
    qtd_ativo AS qtdeAtivo FROM 
    StockmarketXP.investimentos`,
  )
  return result as IInvestimentos[];
};

export default {
  getAllInvestiments,
}