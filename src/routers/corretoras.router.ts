import { Router } from "express";
import controller from '../controller/corretoras.controller';

const routers = Router();

routers.get('/corretoras', controller.getAllStockBrokers);


export default routers