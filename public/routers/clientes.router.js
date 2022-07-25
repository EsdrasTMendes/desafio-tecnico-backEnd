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
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
const createCliente_middleware_1 = __importDefault(require("../middlewares/createCliente.middleware"));
const authcontroller_1 = __importDefault(require("../controller/authcontroller"));
const token_middleware_1 = __importDefault(require("../middlewares/token.middleware"));
const routers = (0, express_1.Router)();
routers.post('/cadastro', createCliente_middleware_1.default, clientes_controller_1.default.createClient, error_middlewares_1.default);
routers.post('/login', auth_middleware_1.default, authcontroller_1.default, error_middlewares_1.default);
routers.get('/conta/:codCliente', token_middleware_1.default, conta_middleware_1.default, clientes_controller_1.default.getClientByCode, error_middlewares_1.default);
routers.post('/conta/deposito', token_middleware_1.default, deposito_middleware_1.default, clientes_controller_1.default.depositByCode, error_middlewares_1.default);
routers.post('/conta/saque', token_middleware_1.default, saque_middleware_1.default, clientes_controller_1.default.withdrawByCode, error_middlewares_1.default);
exports.default = routers;
