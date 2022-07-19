import { Router } from "express";
import controller from '../controller/investimentos.controller';
import middlewares from '../middlewares/investimento.middleware';

const routers = Router();

routers.get('/investimentos', controller.getAllInvestiments);
routers.post('/investimentos/comprar',
middlewares.qtdeAtivosMiddleware,
middlewares.qtdeDisponivelConta,
controller.createInvestiment
)


export default routers