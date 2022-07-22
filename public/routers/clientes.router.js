"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientes_controller_1 = __importDefault(require("../controller/clientes.controller"));
const conta_middleware_1 = __importDefault(require("../middlewares/conta.middleware"));
const deposito_middleware_1 = __importDefault(require("../middlewares/deposito.middleware"));
const error_middlewares_1 = __importDefault(require("../middlewares/error.middlewares"));
const saque_middleware_1 = __importDefault(require("../middlewares/saque.middleware"));
const routers = (0, express_1.Router)();
routers.post('/clientes', clientes_controller_1.default.createClient); // rota para criar clientes, falta criar middleware
routers.get('/conta/:codCliente', conta_middleware_1.default, clientes_controller_1.default.getClientByCode, error_middlewares_1.default);
routers.post('/conta/deposito', deposito_middleware_1.default, clientes_controller_1.default.depositByCode, error_middlewares_1.default);
routers.post('/conta/saque', saque_middleware_1.default, clientes_controller_1.default.withdrawByCode, error_middlewares_1.default);
exports.default = routers;
