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
const getAllClients = () => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield connection_1.default.execute(`SELECT cod_cliente AS codCliente, nome_cliente AS nomeCliente, saldo_conta AS saldoConta,
    saldo_custodia AS saldoCustodia FROM StockmarketXP.clientes`);
    return result;
});
const getClientsByCode = (codCliente) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield connection_1.default.execute(`SELECT cod_cliente AS codCliente, nome_cliente AS nomeCliente, saldo_conta AS saldoConta,
    saldo_custodia AS saldoCustodia FROM StockmarketXP.clientes WHERE cod_cliente = ?`, [codCliente]);
    return result;
});
const getClientByEmailAndPassword = (emailCliente, passwordCliente) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield connection_1.default.execute(`SELECT cod_cliente AS codCliente, email_cliente AS emailCliente, nome_cliente AS nomeCliente, saldo_conta AS saldoConta,
    saldo_custodia AS saldoCustodia FROM StockmarketXP.clientes WHERE email_cliente = ? AND password_cliente = ?`, [emailCliente, passwordCliente]);
    return result;
});
const updateClientByCode = (codCliente, saldoCustodia, saldoConta) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield connection_1.default.execute(`UPDATE clientes SET saldo_custodia = ?, saldo_conta = ? WHERE cod_cliente = ?`, [saldoCustodia, saldoConta, codCliente]);
    return result;
});
const getClientByEmail = (emailCliente) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield connection_1.default.execute(`SELECT cod_cliente AS codCliente, email_cliente AS emailCliente, nome_cliente AS nomeCliente, saldo_conta AS saldoConta,
    saldo_custodia AS saldoCustodia FROM StockmarketXP.clientes WHERE email_cliente = ? `, [emailCliente]);
    return result;
});
const withdrawAndDepositByCode = (codCliente, valor) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield connection_1.default.execute(`UPDATE clientes SET saldo_conta = ? WHERE cod_cliente = ?`, [valor, codCliente]);
    return result;
});
const createClient = (nomeCliente, emailCliente, saldoConta, saldoCustodia, passwordCliente) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield connection_1.default.execute(`INSERT INTO clientes(nome_cliente, email_cliente, saldo_conta, saldo_custodia, password_cliente) values (?, ?, ?, ?, ?)`, [nomeCliente, emailCliente, saldoConta, saldoCustodia, passwordCliente]);
    return result;
});
exports.default = {
    getAllClients,
    getClientsByCode,
    updateClientByCode,
    withdrawAndDepositByCode,
    createClient,
    getClientByEmailAndPassword,
    getClientByEmail,
};
