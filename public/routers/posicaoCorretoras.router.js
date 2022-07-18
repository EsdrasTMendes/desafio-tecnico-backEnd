"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const posicaoCorretoras_controller_1 = __importDefault(require("../controller/posicaoCorretoras.controller"));
const routers = (0, express_1.Router)();
routers.get('/posicoes', posicaoCorretoras_controller_1.default.getAllPositions);
exports.default = routers;
