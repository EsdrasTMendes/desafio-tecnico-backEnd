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
const clientes_service_1 = __importDefault(require("../service/clientes.service"));
const JoiValidations_1 = __importDefault(require("../utils/JoiValidations"));
const middlewareSaque = (req, _res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { CodCliente, Valor } = req.body;
    const { error } = JoiValidations_1.default.JoiValidationsSaque.validate(req.body);
    if (error === null || error === void 0 ? void 0 : error.details[0].message.includes('CodCliente')) {
        next({
            status: 400,
            response: 'Codigo do cliente inválido, tente um código válido.'
        });
    }
    if (error === null || error === void 0 ? void 0 : error.details[0].message.includes('Valor')) {
        next({
            status: 400,
            response: 'Insira um valor válido para saque.'
        });
    }
    if (!error) {
        const { saldoConta } = yield clientes_service_1.default.getClientByCode(CodCliente);
        if (+saldoConta < +Valor) {
            next({
                status: 404,
                response: 'Não é possível fazer o saque. Saldo insuficiente.'
            });
        }
    }
    next();
});
exports.default = middlewareSaque;
