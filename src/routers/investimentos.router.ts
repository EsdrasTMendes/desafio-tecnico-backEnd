import { Router } from "express";
import controller from '../controller/investimentos.controller';

const routers = Router();

routers.get('/investimentos', controller.getAllInvestiments);
routers.post('/investimentos/comprar', controller.getAllInvestiments)


export default routers