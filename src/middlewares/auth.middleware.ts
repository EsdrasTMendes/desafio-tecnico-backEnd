import { Request, Response, NextFunction } from "express";
import clientesService from "../service/clientes.service";
import Joi from "../utils/JoiValidations";

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const {error} = Joi.JoiValidationsAuth.validate(req.body);
  if(error?.details[0].message.includes('pattern')) {
    next({
      status: 400, 
      response: 'Email inválido'
    })
  }
  if(error?.details[0].message.includes('password' && 'empty')) {
    next({
      status: 400,
      response: 'A Senha deve ter no mínimo 8 caracteres e é obrigatória para efetuar o login'
    })
  }
  if(!error) {
    const {email, password} = req.body;
    const clientByEmail = await clientesService.getClientByEmail(email);
    if(!clientByEmail) {
      next({
        status: 400, 
        response: 'Não existe cadastro com email informado'
      })
    }
    const client = await clientesService.getClientByEmailAndPassword(email, password);
    if(!client) {
      next({
        status: 400, 
        response: 'Senha incorreta'
      })
    }
  }
  next()
}
export default authMiddleware;
