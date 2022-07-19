import { Router } from "express";
import controller from '../controller/clientes.controller';

const routers = Router();

routers.get('/clientes', controller.getAllClients);
routers.get('/clientes/:code', controller.getClientByCode);



export default routers