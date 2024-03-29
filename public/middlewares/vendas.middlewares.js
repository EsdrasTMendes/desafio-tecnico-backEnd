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
const JoiValidations_1 = __importDefault(require("../utils/JoiValidations"));
const middlewareVenda = (req, _res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { qtdeAtivo } = req.body;
    const { error } = JoiValidations_1.default.JoiValidations.validate(req.body);
    if (error) {
        next({ status: 400, response: error.details[0].message });
    }
    const result = yield investimentos_service_1.default.getInvestimentByClientAndAsset(req.body);
    if (result.qtdeAtivo < qtdeAtivo) {
        next({ status: 404, response: `Quantidade de ativos disponíveis para venda é de: ${result.qtdeAtivo} lotes` });
    }
    next();
});
exports.default = middlewareVenda;
