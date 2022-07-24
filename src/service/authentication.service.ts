import clientesService from "./clientes.service";
import JWTToken from "../utils/JWTToken";


const authentication = async (email: string, password:string) => {
  const {codCliente, nomeCliente, emailCliente} = await clientesService.getClientByEmailAndPassword(email, password);
  const clienteDataValues = {
    codCliente,
    nomeCliente,
    emailCliente,
  }
  const token = JWTToken.generateJWTToken(clienteDataValues);
  return {
    status: 200,
    response: token
  }
}

export default {
  authentication
};
