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
const authMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = JoiValidations_1.default.JoiValidationsAuth.validate(req.body);
    if (error === null || error === void 0 ? void 0 : error.details[0].message.includes('pattern')) {
        next({
            status: 400,
            response: 'Email inválido'
        });
    }
    if (error === null || error === void 0 ? void 0 : error.details[0].message.includes('password' && 'empty')) {
        next({
            status: 400,
            response: 'A Senha deve ter no mínimo 8 caracteres e é obrigatória para efetuar o login'
        });
    }
    if (!error) {
        const { email, password } = req.body;
        const clientByEmail = yield clientes_service_1.default.getClientByEmail(email);
        if (!clientByEmail) {
            next({
                status: 400,
                response: 'Não existe cadastro com email informado'
            });
        }
        const client = yield clientes_service_1.default.getClientByEmailAndPassword(email, password);
        if (!client) {
            next({
                status: 400,
                response: 'Senha incorreta'
            });
        }
    }
    next();
});
exports.default = authMiddleware;
