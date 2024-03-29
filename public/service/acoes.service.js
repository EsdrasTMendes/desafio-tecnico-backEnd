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
const acoes_model_1 = __importDefault(require("../models/acoes.model"));
const getAllStocks = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield acoes_model_1.default.getAllStocks();
    return result;
});
const getStockByCode = (codAtivo) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield acoes_model_1.default.getStockByCode(codAtivo);
    return result;
});
const updateByCode = (qtdeAtivo, codAtivo) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield acoes_model_1.default.updateByCode(qtdeAtivo, codAtivo);
    return result;
});
const createAssets = ({ codMercado, valorAtivo, qtdeDisponivel }) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield acoes_model_1.default.createAssets(codMercado, valorAtivo, qtdeDisponivel);
    return {
        status: 200,
        response: 'Ativo adidionado com sucesso.'
    };
});
exports.default = {
    getAllStocks,
    getStockByCode,
    updateByCode,
    createAssets
};
