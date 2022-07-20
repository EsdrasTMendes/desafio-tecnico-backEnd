"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const corretoras_controller_1 = __importDefault(require("../controller/corretoras.controller"));
const routers = (0, express_1.Router)();
routers.get('/corretoras', corretoras_controller_1.default.getAllStockBrokers);
exports.default = routers;
