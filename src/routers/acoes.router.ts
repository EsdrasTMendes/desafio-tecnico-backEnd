import { Router } from "express";
import controller from '../controller/acoes.controller';
import middlewareDeErro from "../middlewares/error.middlewares";
import ativoMiddleware from "../middlewares/ativos.middlewares";
import tokenMiddleware from "../middlewares/token.middleware";

const routers = Router();

routers.get('/ativos', controller.getAllStocks);
routers.get(
  '/ativos/:codAtivo',
  tokenMiddleware,
  ativoMiddleware,
  controller.getStockByCode,
  middlewareDeErro
  ); //precisa estar autenticado
routers.post('/acoes', controller.createAssets); 




export default routers