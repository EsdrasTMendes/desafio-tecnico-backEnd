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
const acoes_controller_1 = __importDefault(require("../../controller/acoes.controller"));
const acoes_service_1 = __importDefault(require("../../service/acoes.service"));
const sinon_1 = __importDefault(require("sinon"));
describe('Testa se a função getAllStocks', () => {
    const acoes = [
        {
            codAtivo: 1,
            codMercado: 'PETR4',
            valorAtivo: 29.33,
            qtdeDisponivel: 1000,
        },
        {
            codAtivo: 2,
            codMercado: 'MGLU3',
            valorAtivo: 2.83,
            qtdeDisponivel: 100,
        }
    ];
    const request = {};
    const response = {};
    beforeEach(() => {
        const expectAcoes = acoes;
        request.body = {};
        response.status = sinon_1.default.stub().returns(response);
        response.json = sinon_1.default.stub().returns(expectAcoes);
        sinon_1.default.stub(acoes_service_1.default, 'getAllStocks').resolves(expectAcoes);
    });
    afterEach(() => {
        acoes_service_1.default.getAllStocks.restore();
    });
    it('é chamado o status com o código 200', () => __awaiter(void 0, void 0, void 0, function* () {
        yield acoes_controller_1.default.getAllStocks(request, response);
        (0, chai_1.expect)(response.status.calledWith(200)).to.be.true;
    }));
    it('é chamado o json com todas as ações', () => __awaiter(void 0, void 0, void 0, function* () {
        yield acoes_controller_1.default.getAllStocks(request, response);
        (0, chai_1.expect)(response.json.calledWith(acoes)).to.be.true;
    }));
});
describe('Testa se a função getStockByCode', () => {
    const request = {};
    const response = {};
    const acao = {
        codAtivo: 2,
        codMercado: 'MGLU3',
        valorAtivo: 2.83,
        qtdeDisponivel: 100,
    };
    beforeEach(() => {
        const expectReturn = acao;
        request.params = { codAtivo: 2 };
        response.status = sinon_1.default.stub().returns(response);
        response.json = sinon_1.default.stub().returns(expectReturn);
        sinon_1.default.stub(acoes_service_1.default, 'getStockByCode').resolves(expectReturn);
    });
    afterEach(() => {
        acoes_service_1.default.getStockByCode.restore();
    });
    it('é chamado o status com o código 200', () => __awaiter(void 0, void 0, void 0, function* () {
        yield acoes_controller_1.default.getStockByCode(request, response);
        (0, chai_1.expect)(response.status.calledWith(200)).to.be.true;
    }));
    it('é chamado o json com a ação correspondente ao codigo no request.params todas as ações', () => __awaiter(void 0, void 0, void 0, function* () {
        const { codAtivo } = request.params;
        yield acoes_controller_1.default.getStockByCode(request, response);
        (0, chai_1.expect)(codAtivo).to.be.equal(acao.codAtivo);
        (0, chai_1.expect)(response.json.calledWith(acao)).to.be.true;
    }));
});
describe('Testa se a função createAssets', () => {
    const request = {};
    const response = {};
    const acao = {
        status: 200,
        response: 'Ativo adidionado com sucesso.'
    };
    beforeEach(() => {
        const expectReturn = acao;
        request.body = { codMercado: 'VALE3', valorAtivo: 60, qtdeDisponivel: 1000 };
        response.status = sinon_1.default.stub().returns(response);
        response.json = sinon_1.default.stub().returns(expectReturn.response);
        sinon_1.default.stub(acoes_service_1.default, 'createAssets').resolves(expectReturn);
    });
    afterEach(() => {
        acoes_service_1.default.createAssets.restore();
    });
    it('é chamado o status com o código 200', () => __awaiter(void 0, void 0, void 0, function* () {
        yield acoes_controller_1.default.createAssets(request, response);
        (0, chai_1.expect)(response.status.calledWith(200)).to.be.true;
    }));
    it('é chamado o json com a mensagem "Ativo adicionado com sucesso."', () => __awaiter(void 0, void 0, void 0, function* () {
        const body = request.body;
        yield acoes_controller_1.default.createAssets(request, response);
        (0, chai_1.expect)(body).to.have.keys('codMercado', 'valorAtivo', 'qtdeDisponivel');
        (0, chai_1.expect)(response.json.calledWith(acao.response)).to.be.true;
    }));
});
