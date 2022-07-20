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
const getAllInvestiments = () => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield connection_1.default.execute(`SELECT id, cod_cliente AS codCliente, cod_ativo AS codAtivo,
    qtd_ativo AS qtdeAtivo FROM 
    StockmarketXP.investimentos`);
    return result;
});
const getInvestimentByClient = (codCliente) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield connection_1.default.execute(`SELECT
    i.cod_cliente AS CodCliente,
    i.cod_ativo AS CodAtivo,
    i.qtd_ativo AS QtdeAtivo, 
    a.valor_ativo AS Valor 
    FROM 
    StockmarketXP.investimentos AS i
    INNER JOIN StockmarketXP.acoes AS a
    ON i.cod_ativo = a.cod_ativo
    WHERE i.cod_cliente = ?`, [codCliente]);
    return result;
});
const getInvestimentByClientAndAsset = (codCliente, codAtivo) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield connection_1.default.execute(`SELECT id, cod_cliente AS codCliente, cod_ativo AS codAtivo,
    qtd_ativo AS qtdeAtivo FROM 
    StockmarketXP.investimentos WHERE cod_cliente = ? AND cod_ativo = ?`, [codCliente, codAtivo]);
    return result;
});
const updateInvestiment = (qtdeAtivo, id) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield connection_1.default.execute(`UPDATE investimentos SET qtd_ativo = ? WHERE id= ?`, [qtdeAtivo, id]);
    return result;
});
const createInvestiment = (codCliente, codAtivo, qtdeAtivo) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield connection_1.default.execute(`INSERT INTO investimentos(cod_cliente, cod_ativo, qtd_ativo)
    VALUES (?,?,?)`, [codCliente, codAtivo, qtdeAtivo]);
    return result;
});
const deleteInvestiment = (codCliente, codAtivo) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield connection_1.default.execute(`DELETE FROM investimentos WHERE cod_cliente = ? AND cod_ativo = ?`, [codCliente, codAtivo]);
    return result;
});
exports.default = {
    getAllInvestiments,
    createInvestiment,
    getInvestimentByClient,
    getInvestimentByClientAndAsset,
    updateInvestiment,
    deleteInvestiment,
};
