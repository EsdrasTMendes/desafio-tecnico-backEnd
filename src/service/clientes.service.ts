import model from '../models/clientes.model'
import IClientes from '../interfaces/IClientes';

const getAllClients = async (): Promise<IClientes[]> => {
  const result = await model.getAllClients();
  return result;
};

const getClientByCode = async (codCliente: number): Promise<IClientes> => {
  const [client] = await model.getClientsByCode(codCliente);
  return client;
};
export default {
  getAllClients,
  getClientByCode,
}