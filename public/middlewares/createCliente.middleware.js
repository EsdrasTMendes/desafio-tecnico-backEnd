"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JoiValidations_1 = __importDefault(require("../utils/JoiValidations"));
const createClientMiddleware = (req, _res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = JoiValidations_1.default.JoiCreateClient.validate(req.body);
    if (error === null || error === void 0 ? void 0 : error.details[0].message.includes('nomeCliente')) {
        next({
            status: 400,
            response: 'Nome de cliente inválido'
        });
    }
    if (error === null || error === void 0 ? void 0 : error.details[0].message.includes('emailCliente')) {
        next({
            status: 400,
            response: 'Email inválido'
        });
    }
    if (error === null || error === void 0 ? void 0 : error.details[0].message.includes('saldoConta' || 'saldoCliente')) {
        next({
            status: 400,
            response: 'Saldo da conta e saldo de custodia devem ser um número válido'
        });
    }
    if (error === null || error === void 0 ? void 0 : error.details[0].message.includes('passwordCliente')) {
        next({
            status: 400,
            response: 'Password deve ser de no mínimo 8 caracteres'
        });
    }
    next();
});
exports.default = createClientMiddleware;
