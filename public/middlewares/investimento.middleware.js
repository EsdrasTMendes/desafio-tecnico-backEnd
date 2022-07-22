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
const acoes_service_1 = __importDefault(require("../service/acoes.service"));
const clientes_service_1 = __importDefault(require("../service/clientes.service"));
const JoiValidations_1 = __importDefault(require("../utils/JoiValidations"));
const qtdeAtivosMiddleware = (req, _res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { codAtivo, qtdeAtivo } = req.body;
    const { qtdeDisponivel, codMercado } = yield acoes_service_1.default.getStockByCode(codAtivo);
    const { error } = JoiValidations_1.default.validate(req.body);
    if (error) {
        next({ status: 400, response: error.details[0].message });
    }
    if (qtdeAtivo > qtdeDisponivel) {
        next({ status: 409,
            response: `Ativo indisponível para compra nessa quantidade.
        Quantidade disponível para ${codMercado} é de ${qtdeDisponivel} lotes.`
        });
    }
    next();
});
const qtdeDisponivelConta = (req, _res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { codCliente, codAtivo, qtdeAtivo } = req.body;
    const { saldoConta } = yield clientes_service_1.default.getClientByCode(codCliente);
    const { valorAtivo } = yield acoes_service_1.default.getStockByCode(codAtivo);
    const { error } = JoiValidations_1.default.validate(req.body);
    const valorCompra = Number(qtdeAtivo) * Number(valorAtivo);
    if (error) {
        next({
            status: 400,
            response: error.details[0].message
        });
    }
    if (valorCompra > saldoConta) {
        next({
            status: 406,
            response: 'Compra não autorizada, saldo em conta insuficiente.'
        });
    }
    next();
});
exports.default = {
    qtdeAtivosMiddleware,
    qtdeDisponivelConta,
};
