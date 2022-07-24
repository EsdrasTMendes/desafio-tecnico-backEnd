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
const JoiValidationsCodClient = joi_1.default.object({
    codCliente: joi_1.default.number().min(1).required(),
});
const JoiValidationsSaque = joi_1.default.object({
    CodCliente: joi_1.default.number().min(1).required(),
    Valor: joi_1.default.number().min(0.1).required(),
});
const JoiValidationsAuth = joi_1.default.object({
    email: joi_1.default.string().regex(RegExp(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?([a-z]+)?$/i)).required(),
    password: joi_1.default.string().min(8).required(),
});
const JoiCreateClient = joi_1.default.object({
    nomeCliente: joi_1.default.string().min(3).required(),
    emailCliente: joi_1.default.string().regex(RegExp(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?([a-z]+)?$/i)).required(),
    saldoConta: joi_1.default.number().required(),
    saldoCustodia: joi_1.default.number().required(),
    passwordCliente: joi_1.default.string().min(8).required(),
});
exports.default = {
    JoiValidations,
    JoiValidationsCodClient,
    JoiValidationsSaque,
    JoiValidationsAuth,
    JoiCreateClient,
};
