import { Router } from "express";
import controller from '../controller/acoes.controller';

const routers = Router();

routers.get('/acoes', controller.getAllStocks);
routers.get('/ativos/:code', controller.getStockByCode);



export default routers