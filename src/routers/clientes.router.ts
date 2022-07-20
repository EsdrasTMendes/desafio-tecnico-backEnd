import { Router } from "express";
import controller from '../controller/clientes.controller';

const routers = Router();

routers.get('/clientes', controller.getAllClients);
routers.get('/conta/:code', controller.getClientByCode);



export default routers