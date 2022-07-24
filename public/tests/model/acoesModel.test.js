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
const acoes_model_1 = __importDefault(require("../../models/acoes.model"));
const connection_1 = __importDefault(require("../../models/connection"));
const sinon_1 = __importDefault(require("sinon"));
describe('Testa se a função getAllStocks', () => {
    before(() => {
        const executeReturn = [[
                {
                    codAtivo: 1,
                    codMercado: 'PETR4',
                    valorAtivo: 29.33,
                    qtdeDisponivel: 1000,
                }
            ]];
        sinon_1.default.stub(connection_1.default, 'execute').resolves(executeReturn);
    });
    after(() => {
        connection_1.default.execute.restore();
    });
    describe('retorne:', () => {
        it('um array de objetos', () => __awaiter(void 0, void 0, void 0, function* () {
            const result = yield acoes_model_1.default.getAllStocks();
            (0, chai_1.expect)(result).to.haveOwnProperty('length');
        }));
    });
    describe('verifica se os objetos retornados possuem:', () => {
        it('o código do stivo', () => __awaiter(void 0, void 0, void 0, function* () {
            const [result] = yield acoes_model_1.default.getAllStocks();
            (0, chai_1.expect)(result.codAtivo).to.be.equals(1);
        }));
        it('o código de mercado', () => __awaiter(void 0, void 0, void 0, function* () {
            const [result] = yield acoes_model_1.default.getAllStocks();
            (0, chai_1.expect)(result.codMercado).to.be.equals('PETR4');
        }));
        it('o valor do ativo', () => __awaiter(void 0, void 0, void 0, function* () {
            const [result] = yield acoes_model_1.default.getAllStocks();
            (0, chai_1.expect)(result.valorAtivo).to.be.equals(29.33);
        }));
        it('quantidade disponível do ativo para compra', () => __awaiter(void 0, void 0, void 0, function* () {
            const [result] = yield acoes_model_1.default.getAllStocks();
            (0, chai_1.expect)(result.qtdeDisponivel).to.be.equals(1000);
        }));
    });
});
describe('Testa se a função getStockByCode', () => {
    before(() => {
        const ExpectReturn = [[
                {
                    codAtivo: 1,
                    codMercado: 'PETR4',
                    valorAtivo: 29.33,
                    qtdeDisponivel: 1000,
                }
            ]];
        sinon_1.default.stub(connection_1.default, 'execute').resolves(ExpectReturn);
    });
    after(() => {
        connection_1.default.execute.restore();
    });
    describe('retorna array com um objeto que:', () => {
        it('contém o código do ativo', () => __awaiter(void 0, void 0, void 0, function* () {
            const result = yield acoes_model_1.default.getStockByCode(1);
            (0, chai_1.expect)(result).to.haveOwnProperty('length');
            const [acao] = result;
            (0, chai_1.expect)(acao.codAtivo).to.be.equals(1);
        }));
        it('contém o código de mercado do ativo', () => __awaiter(void 0, void 0, void 0, function* () {
            const [result] = yield acoes_model_1.default.getStockByCode(1);
            (0, chai_1.expect)(result.codMercado).to.be.equals('PETR4');
        }));
        it('contém o valor do ativo', () => __awaiter(void 0, void 0, void 0, function* () {
            const [result] = yield acoes_model_1.default.getStockByCode(1);
            (0, chai_1.expect)(result.valorAtivo).to.be.equals(29.33);
        }));
        it('contém a quantidade de compra disponível do ativo', () => __awaiter(void 0, void 0, void 0, function* () {
            const [result] = yield acoes_model_1.default.getStockByCode(1);
            (0, chai_1.expect)(result.qtdeDisponivel).to.be.equals(1000);
        }));
    });
});
describe('Testa se a função updateByCode', () => {
    before(() => {
        const ExpectReturn = [
            {
                message: 'Operação realizada com sucesso'
            }
        ];
        sinon_1.default.stub(connection_1.default, 'execute').resolves(ExpectReturn);
    });
    after(() => {
        connection_1.default.execute.restore();
    });
    describe('retorna um objeto que:', () => {
        it('contém a mensagem "Operação realizada com sucesso"', () => __awaiter(void 0, void 0, void 0, function* () {
            const { message } = yield acoes_model_1.default.updateByCode(1000, 1);
            (0, chai_1.expect)(message).to.be.equals('Operação realizada com sucesso');
        }));
    });
});
describe('Testa se a função createAssets', () => {
    before(() => {
        const ExpectReturn = [
            {
                message: 'Ativo adicionado com sucesso'
            }
        ];
        sinon_1.default.stub(connection_1.default, 'execute').resolves(ExpectReturn);
    });
    after(() => {
        connection_1.default.execute.restore();
    });
    describe('retorna um objeto que:', () => {
        it('contém a mensagem "Ativo adicionado com sucesso"', () => __awaiter(void 0, void 0, void 0, function* () {
            const { message } = yield acoes_model_1.default.createAssets('MGLU3', 2.83, 10000);
            (0, chai_1.expect)(message).to.be.equals('Ativo adicionado com sucesso');
        }));
    });
});
