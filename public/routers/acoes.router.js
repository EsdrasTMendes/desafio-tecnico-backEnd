"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const acoes_controller_1 = __importDefault(require("../controller/acoes.controller"));
const routers = (0, express_1.Router)();
routers.get('/acoes', acoes_controller_1.default.getAllStocks);
routers.get('/acoes/:code', acoes_controller_1.default.getStockByCode);
exports.default = routers;
