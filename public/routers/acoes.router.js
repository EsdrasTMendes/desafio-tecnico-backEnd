"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const acoes_controller_1 = __importDefault(require("../controller/acoes.controller"));
const error_middlewares_1 = __importDefault(require("../middlewares/error.middlewares"));
const ativos_middlewares_1 = __importDefault(require("../middlewares/ativos.middlewares"));
const token_middleware_1 = __importDefault(require("../middlewares/token.middleware"));
const routers = (0, express_1.Router)();
routers.get('/ativos', acoes_controller_1.default.getAllStocks);
routers.get('/ativos/:codAtivo', token_middleware_1.default, ativos_middlewares_1.default, acoes_controller_1.default.getStockByCode, error_middlewares_1.default); //precisa estar autenticado
routers.post('/acoes', acoes_controller_1.default.createAssets);
exports.default = routers;
