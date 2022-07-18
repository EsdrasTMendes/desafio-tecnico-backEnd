import model from '../models/investimentos.model'
import IInvestimentos from '../interfaces/IInvestimentos';

const getAllInvestiments = async (): Promise<IInvestimentos[]> => {
  const result = await model.getAllInvestiments();
  return result
};

export default {
  getAllInvestiments,
}