import { Router } from "express";
import controller from '../controller/clientes.controller';
import contaMiddleware from "../middlewares/conta.middleware";
import middlewareDeposito from "../middlewares/deposito.middleware";
import middlewareDeErro from "../middlewares/error.middlewares";
import middlewareSaque from "../middlewares/saque.middleware";
import createClientMiddleware from "../middlewares/createCliente.middleware";


const routers = Router();
routers.post('auth/client', ) 
routers.post('/clientes', createClientMiddleware, controller.createClient);// rota para criar clientes, falta criar middleware

routers.get('/conta/:codCliente',contaMiddleware, controller.getClientByCode, middlewareDeErro);
routers.post('/conta/deposito', middlewareDeposito, controller.depositByCode, middlewareDeErro); 
routers.post('/conta/saque', middlewareSaque, controller.withdrawByCode, middlewareDeErro); 



export default routers