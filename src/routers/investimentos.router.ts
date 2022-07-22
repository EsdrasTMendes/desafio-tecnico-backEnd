import { Router } from "express";
import controller from '../controller/investimentos.controller';
import middlewares from '../middlewares/investimento.middleware';
import middlewareDeErro from "../middlewares/error.middlewares";
import middlewareVenda from "../middlewares/vendas.middlewares";

const routers = Router();

routers.get('/investimentos',
controller.getAllInvestiments);

routers.get('/investimentos/:codCliente',
controller.getInvestimentByClient);

routers.post('/investimentos/comprar',
middlewares.qtdeAtivosMiddleware,
middlewares.qtdeDisponivelConta,
controller.createInvestiment,
middlewareDeErro
);

routers.post('/investimentos/vender',
middlewareVenda,
controller.sellInvestiment,
middlewareDeErro
);


export default routers