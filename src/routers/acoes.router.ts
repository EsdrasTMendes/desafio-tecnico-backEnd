import { Router } from "express";
import controller from '../controller/acoes.controller';
import middlewareDeErro from "../middlewares/error.middlewares";
import ativoMiddleware from "../middlewares/ativos.middlewares";

const routers = Router();

routers.get('/ativos', controller.getAllStocks);
routers.get(
  '/ativos/:codAtivo',
  ativoMiddleware,
  controller.getStockByCode,
  middlewareDeErro
  );
routers.post('/acoes', controller.createAssets); //rota que cria ação




export default routers