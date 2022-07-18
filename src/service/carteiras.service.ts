import model from '../models/carteiras.model'
import ICarteiras from '../interfaces/ICarteiras';

const getAllWallets = async (): Promise<ICarteiras[]> => {
  const result = await model.getAllWallets();
  return result
};

export default {
  getAllWallets,
}