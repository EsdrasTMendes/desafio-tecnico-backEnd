import { Router } from "express";
import controller from '../controller/acoes.controller';
import middlewareDeErro from "../middlewares/error.middlewares";
import ativoMiddleware from "../middlewares/ativos.middlewares";

const routers = Router();

routers.get('/acoes', controller.getAllStocks);
routers.get(
  '/ativos/:codAtivo',
  ativoMiddleware,
  controller.getStockByCode,
  middlewareDeErro
  );




export default routers