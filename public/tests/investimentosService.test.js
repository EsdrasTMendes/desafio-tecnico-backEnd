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
const investimentos_service_1 = __importDefault(require("../service/investimentos.service"));
const sinon_1 = __importDefault(require("sinon"));
describe('Testa se a função createInvestiment', () => {
    before(() => {
        const ExpectReturn = {
            status: 200,
            response: {
                codCliente: 1,
                codAtivo: 1,
                qtdeAtivo: 10
            },
        };
        sinon_1.default.stub(investimentos_service_1.default, 'createInvestiment').resolves(ExpectReturn);
    });
    after(() => {
        investimentos_service_1.default.createInvestiment.restore();
    });
    describe('retorna um objeto que:', () => {
        it('contém o status 200', () => __awaiter(void 0, void 0, void 0, function* () {
            const create = {
                codCliente: 1,
                codAtivo: 1,
                qtdeAtivo: 10
            };
            const { status } = yield investimentos_service_1.default.createInvestiment(create);
            (0, chai_1.expect)(status).to.be.equals(200);
        }));
        it('contém um objeto com as informações do investimento', () => __awaiter(void 0, void 0, void 0, function* () {
            const create = {
                codCliente: 1,
                codAtivo: 1,
                qtdeAtivo: 10
            };
            const { response } = yield investimentos_service_1.default.createInvestiment(create);
            (0, chai_1.expect)(response).to.be.a.keys('codAtivo', 'codCliente', 'qtdeAtivo');
            (0, chai_1.expect)(response.codAtivo).to.be.equals(1);
            (0, chai_1.expect)(response.codCliente).to.be.equals(1);
            (0, chai_1.expect)(response.qtdeAtivo).to.be.equals(10);
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
        sinon_1.default.stub(investimentos_service_1.default, 'getInvestimentByClient').resolves(ExpectReturn);
    });
    after(() => {
        investimentos_service_1.default.getInvestimentByClient.restore();
    });
    describe('retorna um array de objetos que:', () => {
        it('contém o id do investimento', () => __awaiter(void 0, void 0, void 0, function* () {
            const [investimento] = yield investimentos_service_1.default.getInvestimentByClient(1);
            (0, chai_1.expect)(investimento.id).to.be.equals(1);
        }));
        it('contém o codigo do cliente', () => __awaiter(void 0, void 0, void 0, function* () {
            const [investimento] = yield investimentos_service_1.default.getInvestimentByClient(1);
            (0, chai_1.expect)(investimento.codCliente).to.be.equals(1);
        }));
        it('contém o codigo do ativo', () => __awaiter(void 0, void 0, void 0, function* () {
            const [investimento] = yield investimentos_service_1.default.getInvestimentByClient(1);
            (0, chai_1.expect)(investimento.codAtivo).to.be.equals(1);
        }));
        it('contém a quantidade de ativos', () => __awaiter(void 0, void 0, void 0, function* () {
            const [investimento] = yield investimentos_service_1.default.getInvestimentByClient(1);
            (0, chai_1.expect)(investimento.qtdeAtivo).to.be.equals(100);
        }));
    });
});
describe('Testa se a função getInvestimentByClientAndAsset', () => {
    before(() => {
        const ExpectReturn = {
            id: 1,
            codCliente: 1,
            codAtivo: 1,
            qtdeAtivo: 100,
        };
        sinon_1.default.stub(investimentos_service_1.default, 'getInvestimentByClientAndAsset').resolves(ExpectReturn);
    });
    after(() => {
        investimentos_service_1.default.getInvestimentByClientAndAsset.restore();
    });
    describe('retorna um array de objetos que:', () => {
        it('contém o id do investimento', () => __awaiter(void 0, void 0, void 0, function* () {
            const object = {
                codCliente: 1,
                codAtivo: 1
            };
            const investimento = yield investimentos_service_1.default.getInvestimentByClientAndAsset(object);
            (0, chai_1.expect)(investimento.id).to.be.equals(1);
        }));
        it('contém o codigo do cliente', () => __awaiter(void 0, void 0, void 0, function* () {
            const object = {
                codCliente: 1,
                codAtivo: 1
            };
            const investimento = yield investimentos_service_1.default.getInvestimentByClientAndAsset(object);
            (0, chai_1.expect)(investimento.codCliente).to.be.equals(1);
        }));
        it('contém o codigo do ativo', () => __awaiter(void 0, void 0, void 0, function* () {
            const object = {
                codCliente: 1,
                codAtivo: 1
            };
            const investimento = yield investimentos_service_1.default.getInvestimentByClientAndAsset(object);
            (0, chai_1.expect)(investimento.codAtivo).to.be.equals(1);
        }));
        it('contém a quantidade de ativos', () => __awaiter(void 0, void 0, void 0, function* () {
            const object = {
                codCliente: 1,
                codAtivo: 1
            };
            const investimento = yield investimentos_service_1.default.getInvestimentByClientAndAsset(object);
            (0, chai_1.expect)(investimento.qtdeAtivo).to.be.equals(100);
        }));
    });
});
describe('Testa se a função deleteInvestiment', () => {
    before(() => {
        const ExpectReturn = {
            status: 200,
            response: {
                codCliente: 1,
                codAtivo: 1,
                qtdeAtivo: 10
            },
        };
        sinon_1.default.stub(investimentos_service_1.default, 'sellInvestiment').resolves(ExpectReturn);
    });
    after(() => {
        investimentos_service_1.default.sellInvestiment.restore();
    });
    describe('retorna um objeto que:', () => {
        it('contém o status 200', () => __awaiter(void 0, void 0, void 0, function* () {
            const create = {
                codCliente: 1,
                codAtivo: 1,
                qtdeAtivo: 10
            };
            const { status } = yield investimentos_service_1.default.createInvestiment(create);
            (0, chai_1.expect)(status).to.be.equals(200);
        }));
        it('contém um objeto com as informações do investimento', () => __awaiter(void 0, void 0, void 0, function* () {
            const create = {
                codCliente: 1,
                codAtivo: 1,
                qtdeAtivo: 10
            };
            const { response } = yield investimentos_service_1.default.createInvestiment(create);
            (0, chai_1.expect)(response).to.be.a.keys('codAtivo', 'codCliente', 'qtdeAtivo');
            (0, chai_1.expect)(response.codAtivo).to.be.equals(1);
            (0, chai_1.expect)(response.codCliente).to.be.equals(1);
            (0, chai_1.expect)(response.qtdeAtivo).to.be.equals(10);
        }));
    });
});
