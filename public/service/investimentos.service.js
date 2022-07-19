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
const investimentos_model_1 = __importDefault(require("../models/investimentos.model"));
const getAllInvestiments = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield investimentos_model_1.default.getAllInvestiments();
    return result;
});
const createInvestiment = ({ codCliente, codAtivo, qtdeAtivo }) => __awaiter(void 0, void 0, void 0, function* () {
    const { insertId } = yield investimentos_model_1.default.createInvestiment(codCliente, codAtivo, qtdeAtivo);
    const result = {
        id: insertId,
        codCliente,
        codAtivo,
        qtdeAtivo
    };
    return {
        status: 200,
        response: result,
    };
});
exports.default = {
    getAllInvestiments,
    createInvestiment,
};