"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const acoes_controller_1 = __importDefault(require("../controller/acoes.controller"));
const error_middlewares_1 = __importDefault(require("../middlewares/error.middlewares"));
const ativos_middlewares_1 = __importDefault(require("../middlewares/ativos.middlewares"));
const routers = (0, express_1.Router)();
routers.get('/ativos', acoes_controller_1.default.getAllStocks);
routers.get('/ativos/:codAtivo', ativos_middlewares_1.default, acoes_controller_1.default.getStockByCode, error_middlewares_1.default);
routers.post('/acoes', acoes_controller_1.default.createAssets); //rota que cria ação
exports.default = routers;
