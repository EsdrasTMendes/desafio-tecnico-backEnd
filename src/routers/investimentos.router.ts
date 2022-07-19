import { Router } from "express";
import controller from '../controller/investimentos.controller';
import middlewareQtdAtivos from '../middlewares/investimento.middleware';

const routers = Router();

routers.get('/investimentos', controller.getAllInvestiments);
routers.post('/investimentos/comprar', middlewareQtdAtivos, controller.createInvestiment)


export default routers