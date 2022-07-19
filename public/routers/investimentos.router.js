"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const investimentos_controller_1 = __importDefault(require("../controller/investimentos.controller"));
const investimento_middleware_1 = __importDefault(require("../middlewares/investimento.middleware"));
const routers = (0, express_1.Router)();
routers.get('/investimentos', investimentos_controller_1.default.getAllInvestiments);
routers.post('/investimentos/comprar', investimento_middleware_1.default, investimentos_controller_1.default.createInvestiment);
exports.default = routers;
