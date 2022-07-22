"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const JoiValidations = joi_1.default.object({
    codCliente: joi_1.default.number().required(),
    codAtivo: joi_1.default.number().required(),
    qtdeAtivo: joi_1.default.number().required(),
});
exports.default = JoiValidations;
