import { Router } from "express";
import controller from '../controller/carteiras.controller';

const routers = Router();

routers.get('/carteiras', controller.getAllWallets);


export default routers