import { Router } from "express";
import controller from '../controller/posicaoCorretoras.controller';

const routers = Router();

routers.get('/posicoes', controller.getAllPositions);


export default routers