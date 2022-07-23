"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const investimentos_controller_1 = __importDefault(require("../controller/investimentos.controller"));
const investimento_middleware_1 = __importDefault(require("../middlewares/investimento.middleware"));
const error_middlewares_1 = __importDefault(require("../middlewares/error.middlewares"));
const vendas_middlewares_1 = __importDefault(require("../middlewares/vendas.middlewares"));
const token_middleware_1 = __importDefault(require("../middlewares/token.middleware"));
const routers = (0, express_1.Router)();
routers.get('/investimentos/:codCliente', token_middleware_1.default, investimento_middleware_1.default.investimentByClient, investimentos_controller_1.default.getInvestimentByClient, error_middlewares_1.default);
routers.post('/investimentos/comprar', token_middleware_1.default, investimento_middleware_1.default.qtdeAtivosMiddleware, investimento_middleware_1.default.qtdeDisponivelConta, investimentos_controller_1.default.createInvestiment, error_middlewares_1.default);
routers.post('/investimentos/vender', token_middleware_1.default, vendas_middlewares_1.default, investimentos_controller_1.default.sellInvestiment, error_middlewares_1.default);
exports.default = routers;
