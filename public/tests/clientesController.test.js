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
const clientes_controller_1 = __importDefault(require("../controller/clientes.controller"));
const clientes_service_1 = __importDefault(require("../service/clientes.service"));
const sinon_1 = __importDefault(require("sinon"));
describe('Testa se a função getClientByCode', () => {
    const mockresult = {
        codCliente: 1,
        nomeCliente: "teste",
        saldoConta: 100.00,
        saldoCustodia: 0.00
    };
    const request = {};
    const response = {};
    beforeEach(() => {
        const expect = mockresult;
        request.params = { codCliente: 1 };
        response.status = sinon_1.default.stub().returns(response);
        response.json = sinon_1.default.stub().returns(expect);
        sinon_1.default.stub(clientes_service_1.default, 'getClientByCode').resolves(expect);
    });
    afterEach(() => {
        clientes_service_1.default.getClientByCode.restore();
    });
    it('é chamado o status com o código 200', () => __awaiter(void 0, void 0, void 0, function* () {
        yield clientes_controller_1.default.getClientByCode(request, response);
        (0, chai_1.expect)(response.status.calledWith(200)).to.be.true;
    }));
    it('é chamado o json com as informações do cliente', () => __awaiter(void 0, void 0, void 0, function* () {
        yield clientes_controller_1.default.getClientByCode(request, response);
        (0, chai_1.expect)(response.json.calledWith(mockresult)).to.be.true;
    }));
});
describe('Testa se a função depositByCode', () => {
    const mockresult = {
        message: "Depósito realizado com sucesso"
    };
    const request = {};
    const response = {};
    beforeEach(() => {
        const expect = mockresult;
        request.body = {
            CodCliente: 1,
            Valor: 100.50
        };
        response.status = sinon_1.default.stub().returns(response);
        response.json = sinon_1.default.stub().returns(expect);
        sinon_1.default.stub(clientes_service_1.default, 'depositByCode').resolves(expect);
    });
    afterEach(() => {
        clientes_service_1.default.depositByCode.restore();
    });
    it('é chamado o status com o código 200', () => __awaiter(void 0, void 0, void 0, function* () {
        yield clientes_controller_1.default.depositByCode(request, response);
        (0, chai_1.expect)(request.body).to.have.keys('CodCliente', 'Valor');
        (0, chai_1.expect)(response.status.calledWith(200)).to.be.true;
    }));
    it('é chamado o json com a mensagem: "Depósito realizado com sucesso"', () => __awaiter(void 0, void 0, void 0, function* () {
        yield clientes_controller_1.default.depositByCode(request, response);
        (0, chai_1.expect)(request.body).to.have.keys('CodCliente', 'Valor');
        (0, chai_1.expect)(response.json.calledWith(mockresult)).to.be.true;
    }));
});
describe('Testa se a função withdrawByCode', () => {
    const mockresult = {
        message: "Saque realizado com sucesso"
    };
    const request = {};
    const response = {};
    beforeEach(() => {
        const expect = mockresult;
        request.body = {
            CodCliente: 1,
            Valor: 50
        };
        response.status = sinon_1.default.stub().returns(response);
        response.json = sinon_1.default.stub().returns(expect);
        sinon_1.default.stub(clientes_service_1.default, 'withdrawByCode').resolves(expect);
    });
    afterEach(() => {
        clientes_service_1.default.withdrawByCode.restore();
    });
    it('é chamado o status com o código 200', () => __awaiter(void 0, void 0, void 0, function* () {
        yield clientes_controller_1.default.withdrawByCode(request, response);
        (0, chai_1.expect)(request.body).to.have.keys('CodCliente', 'Valor');
        (0, chai_1.expect)(response.status.calledWith(200)).to.be.true;
    }));
    it('é chamado o json com a mensagem: "Saque realizado com sucesso"', () => __awaiter(void 0, void 0, void 0, function* () {
        yield clientes_controller_1.default.withdrawByCode(request, response);
        (0, chai_1.expect)(request.body).to.have.keys('CodCliente', 'Valor');
        (0, chai_1.expect)(response.json.calledWith(mockresult)).to.be.true;
    }));
});
describe('Testa se a função createClient', () => {
    const mockresult = {
        status: 200,
        response: "Cliente criado com sucesso"
    };
    const request = {};
    const response = {};
    beforeEach(() => {
        const expect = mockresult;
        request.body = {
            nomeCliente: "xablau",
            emailCliente: "xablau@blau.com",
            saldoConta: 0.00,
            saldoCustodia: 0.00,
            passwordCliente: 11111111
        };
        response.status = sinon_1.default.stub().returns(response);
        response.json = sinon_1.default.stub().returns({ message: expect.response });
        sinon_1.default.stub(clientes_service_1.default, 'createClient').resolves(expect);
    });
    afterEach(() => {
        clientes_service_1.default.createClient.restore();
    });
    it('é chamado o status com o código 200', () => __awaiter(void 0, void 0, void 0, function* () {
        yield clientes_controller_1.default.createClient(request, response);
        (0, chai_1.expect)(request.body).to.have.keys('nomeCliente', 'emailCliente', 'saldoConta', 'saldoCustodia', 'passwordCliente');
        (0, chai_1.expect)(response.status.calledWith(200)).to.be.true;
    }));
    it('é chamado o json com a mensagem: "Cliente criado com sucesso"', () => __awaiter(void 0, void 0, void 0, function* () {
        yield clientes_controller_1.default.createClient(request, response);
        (0, chai_1.expect)(response.json.calledWith({ message: mockresult.response })).to.be.true;
    }));
});
