"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carteiras_controller_1 = __importDefault(require("../controller/carteiras.controller"));
const routers = (0, express_1.Router)();
routers.get('/carteiras', carteiras_controller_1.default.getAllWallets);
exports.default = routers;
