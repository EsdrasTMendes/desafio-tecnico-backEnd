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
const investimentos_controller_1 = __importDefault(require("../../controller/investimentos.controller"));
const investimentos_service_1 = __importDefault(require("../../service/investimentos.service"));
const sinon_1 = __importDefault(require("sinon"));
describe('Testa se a função createInvestiment', () => {
    const mockresult = {
        status: 200,
        response: {
            codCliente: 1,
            codAtivo: 1,
            qtdeAtivo: 10,
        },
    };
    const request = {};
    const response = {};
    beforeEach(() => {
        const expect = mockresult;
        request.body = {
            codCliente: 2,
            codAtivo: 9,
            qtdeAtivo: 99
        };
        response.status = sinon_1.default.stub().returns(response);
        response.json = sinon_1.default.stub().returns(expect.response);
        sinon_1.default.stub(investimentos_service_1.default, 'createInvestiment').resolves(expect);
    });
    afterEach(() => {
        investimentos_service_1.default.createInvestiment.restore();
    });
    it('é chamado o status com o código 200', () => __awaiter(void 0, void 0, void 0, function* () {
        yield investimentos_controller_1.default.createInvestiment(request, response);
        (0, chai_1.expect)(request.body).to.have.keys('codCliente', 'codAtivo', 'qtdeAtivo');
        (0, chai_1.expect)(response.status.calledWith(200)).to.be.true;
    }));
    it('é chamado o json com as informações do investimento', () => __awaiter(void 0, void 0, void 0, function* () {
        yield investimentos_controller_1.default.createInvestiment(request, response);
        (0, chai_1.expect)(response.json.calledWith(mockresult.response)).to.be.true;
    }));
});
describe('Testa se a função getInvestimentByClient', () => {
    const mockresult = [
        {
            codCliente: 2,
            codAtivo: 9,
            qtdeAtivo: 99,
            Valor: 4.42
        }
    ];
    const request = {};
    const response = {};
    beforeEach(() => {
        const expect = mockresult;
        request.params = { codCliente: 2 };
        response.status = sinon_1.default.stub().returns(response);
        response.json = sinon_1.default.stub().returns(expect);
        sinon_1.default.stub(investimentos_service_1.default, 'getInvestimentByClient').resolves(expect);
    });
    afterEach(() => {
        investimentos_service_1.default.getInvestimentByClient.restore();
    });
    it('é chamado o status com o código 200', () => __awaiter(void 0, void 0, void 0, function* () {
        yield investimentos_controller_1.default.getInvestimentByClient(request, response);
        (0, chai_1.expect)(response.status.calledWith(200)).to.be.true;
    }));
    it('é chamado o json com os investimentos do cliente', () => __awaiter(void 0, void 0, void 0, function* () {
        yield investimentos_controller_1.default.getInvestimentByClient(request, response);
        const { codCliente } = request.params;
        (0, chai_1.expect)(mockresult[0].codCliente).to.be.equal(codCliente);
        (0, chai_1.expect)(response.json.calledWith(mockresult)).to.be.true;
    }));
});
describe('Testa se a função sellInvestiment', () => {
    const mockresult = {
        status: 200,
        response: {
            codCliente: 1,
            codAtivo: 2,
            qtdeAtivo: 70
        }
    };
    const request = {};
    const response = {};
    beforeEach(() => {
        const expect = mockresult;
        request.body = {
            codCliente: 2,
            codAtivo: 9,
            qtdeAtivo: 70
        };
        response.status = sinon_1.default.stub().returns(response);
        response.json = sinon_1.default.stub().returns(expect.response);
        sinon_1.default.stub(investimentos_service_1.default, 'sellInvestiment').resolves(expect);
    });
    afterEach(() => {
        investimentos_service_1.default.sellInvestiment.restore();
    });
    it('é chamado o status com o código 200', () => __awaiter(void 0, void 0, void 0, function* () {
        yield investimentos_controller_1.default.sellInvestiment(request, response);
        (0, chai_1.expect)(request.body).to.have.keys('codCliente', 'codAtivo', 'qtdeAtivo');
        (0, chai_1.expect)(response.status.calledWith(200)).to.be.true;
    }));
    it('é chamado o json com as informações da venda', () => __awaiter(void 0, void 0, void 0, function* () {
        yield investimentos_controller_1.default.sellInvestiment(request, response);
        (0, chai_1.expect)(response.json.calledWith(mockresult.response)).to.be.true;
    }));
});
