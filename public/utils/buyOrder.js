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
const orderBuilder_1 = __importDefault(require("./orderBuilder"));
const buyOrder = (codCliente, codAtivo, qtdeAtivo) => __awaiter(void 0, void 0, void 0, function* () {
    const { valorAtivo } = yield acoes_service_1.default.getStockByCode(codAtivo);
    const { saldoConta } = yield clientes_service_1.default.getClientByCode(codCliente);
    const saldoCustodia = valorAtivo * qtdeAtivo;
    const novoSaldo = saldoConta - saldoCustodia;
    const uptadeClient = (0, orderBuilder_1.default)(codCliente, saldoCustodia, novoSaldo);
    acoes_service_1.default.updateByCode(qtdeAtivo, codAtivo);
    clientes_service_1.default.updateClientByCode(uptadeClient);
});
exports.default = buyOrder;
