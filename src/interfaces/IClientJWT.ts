import IClient from "./IClient";

interface IClientJWT extends IClient {
  emailCliente: string,
  passwordCliente: string,
};

export default IClientJWT;