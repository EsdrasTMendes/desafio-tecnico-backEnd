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
const sellOrdersUpdateValues = (codCliente, codAtivo, qtdeAtivo) => __awaiter(void 0, void 0, void 0, function* () {
    const acao = yield acoes_service_1.default.getStockByCode(codAtivo);
    const { saldoConta, saldoCustodia } = yield clientes_service_1.default.getClientByCode(codCliente);
    const saldoVenda = acao.valorAtivo * qtdeAtivo;
    const novoSaldoCustodia = +saldoCustodia - saldoVenda;
    const novoSaldoConta = +saldoConta + saldoVenda;
    const uptadeClient = (0, orderBuilder_1.default)(codCliente, novoSaldoCustodia, novoSaldoConta);
    console.log(acao);
    const novaQtdeAtivo = acao.qtdeDisponivel + +qtdeAtivo;
    acoes_service_1.default.updateByCode(novaQtdeAtivo, codAtivo);
    clientes_service_1.default.updateClientByCode(uptadeClient);
});
exports.default = sellOrdersUpdateValues;
