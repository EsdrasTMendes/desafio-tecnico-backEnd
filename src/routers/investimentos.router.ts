import { Router } from "express";
import controller from '../controller/investimentos.controller';
import middlewares from '../middlewares/investimento.middleware';
import middlewareDeErro from "../middlewares/error.middlewares";
import middlewareVenda from "../middlewares/vendas.middlewares";
import tokenMiddleware from "../middlewares/token.middleware";

const routers = Router();

routers.get('/investimentos/:codCliente',
tokenMiddleware,
middlewares.investimentByClient,
controller.getInvestimentByClient,
middlewareDeErro
);

routers.post('/investimentos/comprar',
tokenMiddleware,
middlewares.qtdeAtivosMiddleware,
middlewares.qtdeDisponivelConta,
controller.createInvestiment,
middlewareDeErro
);

routers.post('/investimentos/vender',
tokenMiddleware,
middlewareVenda,
controller.sellInvestiment,
middlewareDeErro
);


export default routers