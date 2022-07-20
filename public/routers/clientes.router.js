"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientes_controller_1 = __importDefault(require("../controller/clientes.controller"));
const routers = (0, express_1.Router)();
routers.get('/clientes', clientes_controller_1.default.getAllClients);
routers.get('/conta/:code', clientes_controller_1.default.getClientByCode);
routers.post('/conta/deposito', clientes_controller_1.default.depositByCode);
routers.post('/conta/saque', clientes_controller_1.default.withdrawByCode);
exports.default = routers;
