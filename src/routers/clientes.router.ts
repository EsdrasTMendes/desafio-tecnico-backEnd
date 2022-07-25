import { Router } from "express";
import controller from '../controller/clientes.controller';
import contaMiddleware from "../middlewares/conta.middleware";
import middlewareDeposito from "../middlewares/deposito.middleware";
import middlewareDeErro from "../middlewares/error.middlewares";
import middlewareSaque from "../middlewares/saque.middleware";
import authMiddleware from "../middlewares/auth.middleware";
import createClientMiddleware from "../middlewares/createCliente.middleware";
import authentication from "../controller/authcontroller";
import tokenMiddleware from "../middlewares/token.middleware";


const routers = Router();
routers.post('/cadastro', createClientMiddleware, controller.createClient, middlewareDeErro);
routers.post('/login', authMiddleware, authentication, middlewareDeErro);

routers.get('/conta/:codCliente', tokenMiddleware, contaMiddleware, controller.getClientByCode, middlewareDeErro);
routers.post('/conta/deposito',tokenMiddleware, middlewareDeposito, controller.depositByCode, middlewareDeErro); 
routers.post('/conta/saque',tokenMiddleware, middlewareSaque, controller.withdrawByCode, middlewareDeErro); 



export default routers