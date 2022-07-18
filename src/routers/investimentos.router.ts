import { Router } from "express";
import controller from '../controller/investimentos.controller';

const routers = Router();

routers.get('/investimentos', controller.getAllInvestiments);


export default routers