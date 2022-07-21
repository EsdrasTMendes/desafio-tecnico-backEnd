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
const getAllStocks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const stocks = yield acoes_service_1.default.getAllStocks();
    return res.status(200).json(stocks);
});
const getStockByCode = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { codAtivo } = (req.params);
    const stock = yield acoes_service_1.default.getStockByCode(+codAtivo);
    return res.status(200).json(stock);
});
exports.default = {
    getAllStocks,
    getStockByCode
};
