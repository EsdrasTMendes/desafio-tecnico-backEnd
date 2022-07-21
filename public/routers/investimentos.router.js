"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const investimentos_controller_1 = __importDefault(require("../controller/investimentos.controller"));
const investimento_middleware_1 = __importDefault(require("../middlewares/investimento.middleware"));
const middlewaredeerro_1 = __importDefault(require("../middlewares/middlewaredeerro"));
const routers = (0, express_1.Router)();
routers.get('/investimentos', investimentos_controller_1.default.getAllInvestiments);
routers.get('/investimentos/:codCliente', investimentos_controller_1.default.getInvestimentByClient);
routers.post('/investimentos/comprar', investimento_middleware_1.default.qtdeAtivosMiddleware, investimento_middleware_1.default.qtdeDisponivelConta, investimentos_controller_1.default.createInvestiment, middlewaredeerro_1.default);
routers.post('/investimentos/vender', investimentos_controller_1.default.sellInvestiment);
exports.default = routers;
