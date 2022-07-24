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
const chai_1 = require("chai");
const investimentos_model_1 = __importDefault(require("../models/investimentos.model"));
const sinon_1 = __importDefault(require("sinon"));
describe('Testa se a função createInvestiment', () => {
    before(() => {
        const ExpectReturn = {
            message: 'Operação realizada com sucesso'
        };
        sinon_1.default.stub(investimentos_model_1.default, 'createInvestiment').resolves(ExpectReturn);
    });
    after(() => {
        investimentos_model_1.default.createInvestiment.restore();
    });
    describe('retorna um objeto que:', () => {
        it('contém a mensagem "Operação realizada com sucesso"', () => __awaiter(void 0, void 0, void 0, function* () {
            const { message } = yield investimentos_model_1.default.createInvestiment(1, 2, 100);
            (0, chai_1.expect)(message).to.be.equals('Operação realizada com sucesso');
        }));
    });
});
describe('Testa se a função getInvestimentByClient', () => {
    before(() => {
        const ExpectReturn = [
            {
                id: 1,
                codCliente: 1,
                codAtivo: 1,
                qtdeAtivo: 100,
            }
        ];
        sinon_1.default.stub(investimentos_model_1.default, 'getInvestimentByClient').resolves(ExpectReturn);
    });
    after(() => {
        investimentos_model_1.default.getInvestimentByClient.restore();
    });
    describe('retorna um array de objetos que:', () => {
        it('contém o id do investimento', () => __awaiter(void 0, void 0, void 0, function* () {
            const [investimento] = yield investimentos_model_1.default.getInvestimentByClient(1);
            (0, chai_1.expect)(investimento.id).to.be.equals(1);
        }));
        it('contém o codigo do cliente', () => __awaiter(void 0, void 0, void 0, function* () {
            const [investimento] = yield investimentos_model_1.default.getInvestimentByClient(1);
            (0, chai_1.expect)(investimento.codCliente).to.be.equals(1);
        }));
        it('contém o codigo do ativo', () => __awaiter(void 0, void 0, void 0, function* () {
            const [investimento] = yield investimentos_model_1.default.getInvestimentByClient(1);
            (0, chai_1.expect)(investimento.codAtivo).to.be.equals(1);
        }));
        it('contém a quantidade de ativos', () => __awaiter(void 0, void 0, void 0, function* () {
            const [investimento] = yield investimentos_model_1.default.getInvestimentByClient(1);
            (0, chai_1.expect)(investimento.qtdeAtivo).to.be.equals(100);
        }));
    });
});
describe('Testa se a função getInvestimentByClientAndAsset', () => {
    before(() => {
        const ExpectReturn = [
            {
                id: 1,
                codCliente: 1,
                codAtivo: 1,
                qtdeAtivo: 100,
            }
        ];
        sinon_1.default.stub(investimentos_model_1.default, 'getInvestimentByClientAndAsset').resolves(ExpectReturn);
    });
    after(() => {
        investimentos_model_1.default.getInvestimentByClientAndAsset.restore();
    });
    describe('retorna um array de objetos que:', () => {
        it('contém o id do investimento', () => __awaiter(void 0, void 0, void 0, function* () {
            const [investimento] = yield investimentos_model_1.default.getInvestimentByClientAndAsset(1, 1);
            (0, chai_1.expect)(investimento.id).to.be.equals(1);
        }));
        it('contém o codigo do cliente', () => __awaiter(void 0, void 0, void 0, function* () {
            const [investimento] = yield investimentos_model_1.default.getInvestimentByClientAndAsset(1, 1);
            (0, chai_1.expect)(investimento.codCliente).to.be.equals(1);
        }));
        it('contém o codigo do ativo', () => __awaiter(void 0, void 0, void 0, function* () {
            const [investimento] = yield investimentos_model_1.default.getInvestimentByClientAndAsset(1, 1);
            (0, chai_1.expect)(investimento.codAtivo).to.be.equals(1);
        }));
        it('contém a quantidade de ativos', () => __awaiter(void 0, void 0, void 0, function* () {
            const [investimento] = yield investimentos_model_1.default.getInvestimentByClientAndAsset(1, 1);
            (0, chai_1.expect)(investimento.qtdeAtivo).to.be.equals(100);
        }));
    });
});
describe('Testa se a função updateInvestiment', () => {
    before(() => {
        const ExpectReturn = {
            message: 'Operação realizada com sucesso'
        };
        sinon_1.default.stub(investimentos_model_1.default, 'updateInvestiment').resolves(ExpectReturn);
    });
    after(() => {
        investimentos_model_1.default.updateInvestiment.restore();
    });
    describe('retorna um objeto que:', () => {
        it('contém a mensagem "Operação realizada com sucesso"', () => __awaiter(void 0, void 0, void 0, function* () {
            const { message } = yield investimentos_model_1.default.updateInvestiment(1, 1);
            (0, chai_1.expect)(message).to.be.equals('Operação realizada com sucesso');
        }));
    });
});
describe('Testa se a função deleteInvestiment', () => {
    before(() => {
        const ExpectReturn = {
            message: 'Operação realizada com sucesso'
        };
        sinon_1.default.stub(investimentos_model_1.default, 'deleteInvestiment').resolves(ExpectReturn);
    });
    after(() => {
        investimentos_model_1.default.deleteInvestiment.restore();
    });
    describe('retorna um objeto que:', () => {
        it('contém a mensagem "Operação realizada com sucessoo"', () => __awaiter(void 0, void 0, void 0, function* () {
            const { message } = yield investimentos_model_1.default.deleteInvestiment(1, 1);
            (0, chai_1.expect)(message).to.be.equals('Operação realizada com sucesso');
        }));
    });
});
