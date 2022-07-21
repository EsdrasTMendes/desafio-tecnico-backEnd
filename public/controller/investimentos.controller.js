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
const investimentos_service_1 = __importDefault(require("../service/investimentos.service"));
const getAllInvestiments = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const wallets = yield investimentos_service_1.default.getAllInvestiments();
    return res.status(200).json(wallets);
});
const createInvestiment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { status, response } = yield investimentos_service_1.default.createInvestiment(req.body);
    return res.status(status).json(response);
});
const getInvestimentByClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { codCliente } = req.params;
    const result = yield investimentos_service_1.default.getInvestimentByClient(+codCliente);
    return res.status(200).json(result);
});
const sellInvestiment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { status, response } = yield investimentos_service_1.default.sellInvestiment(req.body);
    return res.status(status).json(response);
});
exports.default = {
    getAllInvestiments,
    createInvestiment,
    getInvestimentByClient,
    sellInvestiment,
};
