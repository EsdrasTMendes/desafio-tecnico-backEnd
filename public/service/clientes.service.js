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
const clientes_model_1 = __importDefault(require("../models/clientes.model"));
const getAllClients = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield clientes_model_1.default.getAllClients();
    return result;
});
const getClientByCode = (codCliente) => __awaiter(void 0, void 0, void 0, function* () {
    const [client] = yield clientes_model_1.default.getClientsByCode(codCliente);
    return client;
});
const updateClientByCode = ({ codCliente, saldoConta, saldoCustodia }) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield clientes_model_1.default.updateClientByCode(codCliente, saldoConta, saldoCustodia);
    return result;
});
const withdrawByCode = ({ CodCliente, Valor }) => __awaiter(void 0, void 0, void 0, function* () {
    const [client] = yield clientes_model_1.default.getClientsByCode(CodCliente);
    const newValueConta = Number(client.saldoConta) - Number(Valor);
    const result = yield clientes_model_1.default.withdrawAndDepositByCode(CodCliente, newValueConta);
    console.log(result);
    return result;
});
const depositByCode = ({ CodCliente, Valor }) => __awaiter(void 0, void 0, void 0, function* () {
    const [client] = yield clientes_model_1.default.getClientsByCode(CodCliente);
    const newValueConta = Number(client.saldoConta) + Number(Valor);
    const result = yield clientes_model_1.default.withdrawAndDepositByCode(CodCliente, newValueConta);
    console.log(result);
    return result;
});
exports.default = {
    getAllClients,
    getClientByCode,
    updateClientByCode,
    withdrawByCode,
    depositByCode,
};
