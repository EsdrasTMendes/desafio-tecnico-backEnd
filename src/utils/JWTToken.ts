import { SignOptions, sign, verify } from 'jsonwebtoken';
import IClientJWT from '../interfaces/IClientJWT';
import dotenv from 'dotenv';
dotenv.config();

const SECRET: string = process.env.JWT_SECRET || 'processenvSecret';

const jwtConfig: SignOptions = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const verifyToken = async(token: string|undefined) => {
  if(!token|| token === undefined) {
    return {
      status: 401, 
      response: 'Token not found',
      error: true, 
    }
  }
  try{
    const validation =  verify(token, SECRET, jwtConfig);
    return {
      status: 200,
      response: validation,
      error: false
    }
  } catch(e) {
    return {
      status: 200,
      response: 'Token expirado ou inválido',
      error: true
    }
  }
}

const generateJWTToken = (client: Omit<IClientJWT, 
  'passwordCliente'| 'saldoCustodia'| 'saldoConta'>) => sign(client, SECRET, jwtConfig);


  export default {
    generateJWTToken,
    verifyToken,
  }
