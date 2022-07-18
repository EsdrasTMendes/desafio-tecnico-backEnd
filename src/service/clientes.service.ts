import model from '../models/clientes.model'
import IClientes from '../interfaces/IClientes';

const getAllClients = async (): Promise<IClientes[]> => {
  const result = await model.getAllClients();
  return result
};

export default {
  getAllClients,
}