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
const clientes_model_1 = __importDefault(require("../../models/clientes.model"));
const connection_1 = __importDefault(require("../../models/connection"));
const sinon_1 = __importDefault(require("sinon"));
describe('Testa se a função getClientsByCode', () => {
    let executeSpy;
    before(() => {
        const ExpectReturn = [[{
                    codCliente: 1,
                    nomeCliente: "Esdras Tenório Mendes",
                    saldoConta: 100.00,
                    saldoCustodia: 0.00
                }]];
        executeSpy = sinon_1.default.stub(connection_1.default, 'execute').resolves(ExpectReturn);
    });
    after(() => {
        connection_1.default.execute.restore();
    });
    describe('retorna um objeto que:', () => {
        it('contém o código do cliente', () => __awaiter(void 0, void 0, void 0, function* () {
            const [cliente] = yield clientes_model_1.default.getClientsByCode(1);
            const { codCliente } = cliente;
            (0, chai_1.expect)(codCliente).to.be.equals(1);
        }));
        it('contém o nome do cliente', () => __awaiter(void 0, void 0, void 0, function* () {
            const [cliente] = yield clientes_model_1.default.getClientsByCode(1);
            const { nomeCliente } = cliente;
            (0, chai_1.expect)(nomeCliente).to.be.equals('Esdras Tenório Mendes');
        }));
        it('contém o saldo da conta do cliente', () => __awaiter(void 0, void 0, void 0, function* () {
            const [cliente] = yield clientes_model_1.default.getClientsByCode(1);
            const { saldoConta } = cliente;
            (0, chai_1.expect)(saldoConta).to.be.equals(100);
        }));
        it('contém o saldo de custodia do cliente', () => __awaiter(void 0, void 0, void 0, function* () {
            const [cliente] = yield clientes_model_1.default.getClientsByCode(1);
            const { saldoCustodia } = cliente;
            (0, chai_1.expect)(saldoCustodia).to.be.equals(0);
        }));
    });
});
describe('Testa se a função updateClientByCode', () => {
    before(() => {
        const ExpectReturn = [{
                message: 'Cliente atualizado com sucesso'
            }];
        sinon_1.default.stub(connection_1.default, 'execute').resolves(ExpectReturn);
    });
    after(() => {
        connection_1.default.execute.restore();
    });
    it('retorna a mensagem "Cliente autualizado com sucesso"', () => __awaiter(void 0, void 0, void 0, function* () {
        const { message } = yield clientes_model_1.default.updateClientByCode(1, 20, 10);
        (0, chai_1.expect)(message).to.be.equals('Cliente atualizado com sucesso');
    }));
});
describe('Testa se a função withdrawAndDepositByCode', () => {
    before(() => {
        const ExpectReturn = [{
                message: 'Operação realizada com sucesso'
            }];
        sinon_1.default.stub(connection_1.default, 'execute').resolves(ExpectReturn);
    });
    after(() => {
        connection_1.default.execute.restore();
    });
    it('retorna a mensagem "Operação realizada com sucesso"', () => __awaiter(void 0, void 0, void 0, function* () {
        const { message } = yield clientes_model_1.default.withdrawAndDepositByCode(1, 20);
        (0, chai_1.expect)(message).to.be.equals('Operação realizada com sucesso');
    }));
});
describe('Testa se a função createClient', () => {
    before(() => {
        const ExpectReturn = [{
                message: 'Cadastro criado com sucesso.'
            }];
        sinon_1.default.stub(connection_1.default, 'execute').resolves(ExpectReturn);
    });
    after(() => {
        connection_1.default.execute.restore();
    });
    it('retorna a mensagem "Cadastro criado com sucesso" ', () => __awaiter(void 0, void 0, void 0, function* () {
        const { message } = yield clientes_model_1.default.createClient('Esdras Mendes', 'esdrastmendes@gmail.com', 10, 0, 'senhateste1');
        (0, chai_1.expect)(message).to.be.equals('Cadastro criado com sucesso.');
    }));
});
describe('Testa se a função getClientByEmailAndPassword', () => {
    before(() => {
        const ExpectReturn = [[{
                    codCliente: 1,
                    nomeCliente: 'Esdras Tenório Mendes',
                    saldoConta: 10,
                    saldoCustodia: 0,
                    emailCliente: 'esdrastmendes@gmail.com',
                    passwordCliente: '123456789',
                }]];
        sinon_1.default.stub(connection_1.default, 'execute').resolves(ExpectReturn);
    });
    after(() => {
        connection_1.default.execute.restore();
    });
    describe('retorna um objeto que:', () => {
        it('contém o código do cliente ', () => __awaiter(void 0, void 0, void 0, function* () {
            const [cliente] = yield clientes_model_1.default.getClientByEmailAndPassword('Esdras Tenório Mendes', 'senhateste1');
            const { codCliente } = cliente;
            (0, chai_1.expect)(codCliente).to.be.equals(1);
        }));
        it('contém o nome do cliente ', () => __awaiter(void 0, void 0, void 0, function* () {
            const [cliente] = yield clientes_model_1.default.getClientByEmailAndPassword('Esdras Tenório Mendes', 'senhateste1');
            const { nomeCliente } = cliente;
            (0, chai_1.expect)(nomeCliente).to.be.equals('Esdras Tenório Mendes');
        }));
        it('contém o saldo da Conta do cliente ', () => __awaiter(void 0, void 0, void 0, function* () {
            const [cliente] = yield clientes_model_1.default.getClientByEmailAndPassword('Esdras Tenório Mendes', 'senhateste1');
            const { saldoConta } = cliente;
            (0, chai_1.expect)(saldoConta).to.be.equals(10);
        }));
        it('contém o saldo de Custodia da Conta do cliente ', () => __awaiter(void 0, void 0, void 0, function* () {
            const [cliente] = yield clientes_model_1.default.getClientByEmailAndPassword('Esdras Tenório Mendes', 'senhateste1');
            const { saldoCustodia } = cliente;
            (0, chai_1.expect)(saldoCustodia).to.be.equals(0);
        }));
        it('contém o email de cadastro do cliente ', () => __awaiter(void 0, void 0, void 0, function* () {
            const [cliente] = yield clientes_model_1.default.getClientByEmailAndPassword('Esdras Tenório Mendes', 'senhateste1');
            const { emailCliente } = cliente;
            (0, chai_1.expect)(emailCliente).to.be.equals('esdrastmendes@gmail.com');
        }));
        it('contém a senha de cadastro do cliente ', () => __awaiter(void 0, void 0, void 0, function* () {
            const [cliente] = yield clientes_model_1.default.getClientByEmailAndPassword('Esdras Tenório Mendes', 'senhateste1');
            const { passwordCliente } = cliente;
            (0, chai_1.expect)(passwordCliente).to.be.equals('123456789');
        }));
    });
});
describe('Testa se a função getClientByEmail', () => {
    before(() => {
        const ExpectReturn = [[{
                    codCliente: 1,
                    nomeCliente: 'Esdras Tenório Mendes',
                    saldoConta: 10,
                    saldoCustodia: 0,
                    emailCliente: 'esdrastmendes@gmail.com',
                    passwordCliente: '123456789',
                }]];
        sinon_1.default.stub(connection_1.default, 'execute').resolves(ExpectReturn);
    });
    after(() => {
        connection_1.default.execute.restore();
    });
    describe('retorna um objeto que:', () => {
        it('contém o código do cliente ', () => __awaiter(void 0, void 0, void 0, function* () {
            const [cliente] = yield clientes_model_1.default.getClientByEmail('esdrastmendes@gmail.com');
            const { codCliente } = cliente;
            (0, chai_1.expect)(codCliente).to.be.equals(1);
        }));
        it('contém o nome do cliente ', () => __awaiter(void 0, void 0, void 0, function* () {
            const [cliente] = yield clientes_model_1.default.getClientByEmail('esdrastmendes@gmail.com');
            const { nomeCliente } = cliente;
            (0, chai_1.expect)(nomeCliente).to.be.equals('Esdras Tenório Mendes');
        }));
        it('contém o saldo da Conta do cliente ', () => __awaiter(void 0, void 0, void 0, function* () {
            const [cliente] = yield clientes_model_1.default.getClientByEmail('esdrastmendes@gmail.com');
            const { saldoConta } = cliente;
            (0, chai_1.expect)(saldoConta).to.be.equals(10);
        }));
        it('contém o saldo de Custodia da Conta do cliente ', () => __awaiter(void 0, void 0, void 0, function* () {
            const [cliente] = yield clientes_model_1.default.getClientByEmail('esdrastmendes@gmail.com');
            const { saldoCustodia } = cliente;
            (0, chai_1.expect)(saldoCustodia).to.be.equals(0);
        }));
        it('contém o email de cadastro do cliente ', () => __awaiter(void 0, void 0, void 0, function* () {
            const [cliente] = yield clientes_model_1.default.getClientByEmail('esdrastmendes@gmail.com');
            const { emailCliente } = cliente;
            (0, chai_1.expect)(emailCliente).to.be.equals('esdrastmendes@gmail.com');
        }));
        it('contém a senha de cadastro do cliente ', () => __awaiter(void 0, void 0, void 0, function* () {
            const [cliente] = yield clientes_model_1.default.getClientByEmail('esdrastmendes@gmail.com');
            const { passwordCliente } = cliente;
            (0, chai_1.expect)(passwordCliente).to.be.equals('123456789');
        }));
    });
});
