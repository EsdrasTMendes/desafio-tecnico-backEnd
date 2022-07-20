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
const getAllClients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clients = yield clientes_service_1.default.getAllClients();
    return res.status(200).json(clients);
});
const getClientByCode = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { code } = req.params;
    const client = yield clientes_service_1.default.getClientByCode(+code);
    return res.status(200).json(client);
});
const depositByCode = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deposit = yield clientes_service_1.default.depositByCode(req.body);
    return res.status(200).json({ message: 'Depósito realizado com sucesso' });
});
const withdrawByCode = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deposit = yield clientes_service_1.default.withdrawByCode(req.body);
    return res.status(200).json({ message: 'Saque realizado com sucesso' });
});
exports.default = {
    getAllClients,
    getClientByCode,
    depositByCode,
    withdrawByCode,
};
