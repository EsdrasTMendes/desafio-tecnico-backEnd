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
const connection_1 = __importDefault(require("./connection"));
const getAllPositions = () => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield connection_1.default.execute(`SELECT corretora_id AS corretoraId, ativo_id AS ativoId, qtd_disponivel AS qtdDisponivel
    FROM StockmarketXP.posicao_corretoras`);
    return result;
});
const getPositionsByStockAndBroker = (ativoId, corretoraId) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield connection_1.default.execute(`SELECT corretora_id AS corretoraId, ativo_id AS ativoId, qtd_disponivel AS qtdDisponivel
    FROM StockmarketXP.posicao_corretoras WHERE corretora_id = ? AND ativoId = ?`, [ativoId, corretoraId]);
    return result;
});
exports.default = {
    getAllPositions,
    getPositionsByStockAndBroker
};
