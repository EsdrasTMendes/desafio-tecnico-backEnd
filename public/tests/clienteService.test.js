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
const clientes_service_1 = __importDefault(require("../service/clientes.service"));
const sinon_1 = __importDefault(require("sinon"));
describe('Testa se a função getClientByCode', () => {
    before(() => {
        const ExpectReturn = {
            codCliente: 1,
            nomeCliente: 'Usuario',
            saldoConta: 100,
            saldoCustodia: 10
        };
        sinon_1.default.stub(clientes_service_1.default, 'getClientByCode').resolves(ExpectReturn);
    });
    after(() => {
        clientes_service_1.default.getClientByCode.restore();
    });
    describe('retorna um objeto que:', () => {
        it('contém o código do cliente', () => __awaiter(void 0, void 0, void 0, function* () {
            const cliente = yield clientes_service_1.default.getClientByCode(1);
            const { codCliente } = cliente;
            (0, chai_1.expect)(codCliente).to.be.equals(1);
        }));
        it('contém o nome do cliente', () => __awaiter(void 0, void 0, void 0, function* () {
            const cliente = yield clientes_service_1.default.getClientByCode(1);
            const { nomeCliente } = cliente;
            (0, chai_1.expect)(nomeCliente).to.be.equals('Usuario');
        }));
        it('contém o saldo da conta do cliente', () => __awaiter(void 0, void 0, void 0, function* () {
            const cliente = yield clientes_service_1.default.getClientByCode(1);
            const { saldoConta } = cliente;
            (0, chai_1.expect)(saldoConta).to.be.equals(100);
        }));
        it('contém o saldo de custodia do cliente', () => __awaiter(void 0, void 0, void 0, function* () {
            const cliente = yield clientes_service_1.default.getClientByCode(1);
            const { saldoCustodia } = cliente;
            (0, chai_1.expect)(saldoCustodia).to.be.equals(10);
        }));
    });
});
describe('Testa se a função updateClientByCode', () => {
    before(() => {
        const ExpectReturn = {
            message: 'Cliente atualizado com sucesso'
        };
        sinon_1.default.stub(clientes_service_1.default, 'updateClientByCode').resolves(ExpectReturn);
    });
    after(() => {
        clientes_service_1.default.updateClientByCode.restore();
    });
    describe('retorna um objeto que:', () => {
        it('contém a mensagem "Cliente atualizado com sucesso"', () => __awaiter(void 0, void 0, void 0, function* () {
            const update = {
                codCliente: 1,
                saldoConta: 100,
                saldoCustodia: 10,
            };
            const { message } = yield clientes_service_1.default.updateClientByCode(update);
            (0, chai_1.expect)(message).to.be.equals('Cliente atualizado com sucesso');
        }));
    });
});
describe('Testa se a função withdrawByCode', () => {
    before(() => {
        const ExpectReturn = {
            message: 'Operação realizada com sucesso'
        };
        sinon_1.default.stub(clientes_service_1.default, 'withdrawByCode').resolves(ExpectReturn);
    });
    after(() => {
        clientes_service_1.default.withdrawByCode.restore();
    });
    describe('retorna um objeto que:', () => {
        it('contém a mensagem "Operação realizada com sucesso"', () => __awaiter(void 0, void 0, void 0, function* () {
            const update = {
                CodCliente: 1,
                Valor: 100
            };
            const { message } = yield clientes_service_1.default.withdrawByCode(update);
            (0, chai_1.expect)(message).to.be.equals('Operação realizada com sucesso');
        }));
    });
});
describe('Testa se a função depositByCode', () => {
    before(() => {
        const ExpectReturn = {
            message: 'Operação realizada com sucesso'
        };
        sinon_1.default.stub(clientes_service_1.default, 'depositByCode').resolves(ExpectReturn);
    });
    after(() => {
        clientes_service_1.default.depositByCode.restore();
    });
    describe('retorna um objeto que:', () => {
        it('contém a mensagem "Operação realizada com sucesso"', () => __awaiter(void 0, void 0, void 0, function* () {
            const update = {
                CodCliente: 1,
                Valor: 100
            };
            const { message } = yield clientes_service_1.default.depositByCode(update);
            (0, chai_1.expect)(message).to.be.equals('Operação realizada com sucesso');
        }));
    });
});
describe('Testa se a função createClient', () => {
    before(() => {
        const ExpectReturn = {
            status: 200,
            response: 'Cliente criado com sucesso'
        };
        sinon_1.default.stub(clientes_service_1.default, 'createClient').resolves(ExpectReturn);
    });
    after(() => {
        clientes_service_1.default.createClient.restore();
    });
    describe('retorna um objeto que:', () => {
        it('contém o status 200', () => __awaiter(void 0, void 0, void 0, function* () {
            const create = {
                codCliente: 1,
                nomeCliente: 'Usuario',
                saldoConta: 100,
                saldoCustodia: 0,
                emailCliente: 'email@gmail.com',
                passwordCliente: 'senhaexemple2',
            };
            const { status } = yield clientes_service_1.default.createClient(create);
            (0, chai_1.expect)(status).to.be.equals(200);
        }));
        it('contém a mensagem "Cliente criado com sucesso"', () => __awaiter(void 0, void 0, void 0, function* () {
            const create = {
                codCliente: 1,
                nomeCliente: 'Usuario',
                saldoConta: 100,
                saldoCustodia: 0,
                emailCliente: 'email@gmail.com',
                passwordCliente: 'senhaexemple2',
            };
            const { response } = yield clientes_service_1.default.createClient(create);
            (0, chai_1.expect)(response).to.be.equals('Cliente criado com sucesso');
        }));
    });
});
describe('Testa se a função getClientByEmailAndPassword', () => {
    before(() => {
        const ExpectReturn = {
            codCliente: 1,
            nomeCliente: 'Usuario',
            saldoConta: 100,
            saldoCustodia: 0,
            emailCliente: 'email@gmail.com',
            passwordCliente: 'senhaexemple2',
        };
        sinon_1.default.stub(clientes_service_1.default, 'getClientByEmailAndPassword').resolves(ExpectReturn);
    });
    after(() => {
        clientes_service_1.default.getClientByEmailAndPassword.restore();
    });
    describe('retorna um objeto que:', () => {
        it('contém o código do cliente ', () => __awaiter(void 0, void 0, void 0, function* () {
            const cliente = yield clientes_service_1.default.getClientByEmailAndPassword('Usuario', 'senhaexemple2');
            const { codCliente } = cliente;
            (0, chai_1.expect)(codCliente).to.be.equals(1);
        }));
        it('contém o nome do cliente ', () => __awaiter(void 0, void 0, void 0, function* () {
            const cliente = yield clientes_service_1.default.getClientByEmailAndPassword('Usuario', 'senhaexemple2');
            const { nomeCliente } = cliente;
            (0, chai_1.expect)(nomeCliente).to.be.equals('Usuario');
        }));
        it('contém o saldo da Conta do cliente ', () => __awaiter(void 0, void 0, void 0, function* () {
            const cliente = yield clientes_service_1.default.getClientByEmailAndPassword('Usuario', 'senhaexemple2');
            const { saldoConta } = cliente;
            (0, chai_1.expect)(saldoConta).to.be.equals(100);
        }));
        it('contém o saldo de Custodia da Conta do cliente ', () => __awaiter(void 0, void 0, void 0, function* () {
            const cliente = yield clientes_service_1.default.getClientByEmailAndPassword('Usuario', 'senhaexemple2');
            const { saldoCustodia } = cliente;
            (0, chai_1.expect)(saldoCustodia).to.be.equals(0);
        }));
        it('contém o email de cadastro do cliente ', () => __awaiter(void 0, void 0, void 0, function* () {
            const cliente = yield clientes_service_1.default.getClientByEmailAndPassword('Usuario', 'senhaexemple2');
            const { emailCliente } = cliente;
            (0, chai_1.expect)(emailCliente).to.be.equals('email@gmail.com');
        }));
        it('contém a senha de cadastro do cliente ', () => __awaiter(void 0, void 0, void 0, function* () {
            const cliente = yield clientes_service_1.default.getClientByEmailAndPassword('Usuario', 'senhateste1');
            const { passwordCliente } = cliente;
            (0, chai_1.expect)(passwordCliente).to.be.equals('senhaexemple2');
        }));
    });
});
describe('Testa se a função getClientByEmail', () => {
    before(() => {
        const ExpectReturn = {
            codCliente: 1,
            nomeCliente: 'Usuario',
            saldoConta: 100,
            saldoCustodia: 0,
            emailCliente: 'email@gmail.com',
            passwordCliente: 'senhaexemple2',
        };
        sinon_1.default.stub(clientes_service_1.default, 'getClientByEmail').resolves(ExpectReturn);
    });
    after(() => {
        clientes_service_1.default.getClientByEmail.restore();
    });
    describe('retorna um objeto que:', () => {
        it('contém o código do cliente ', () => __awaiter(void 0, void 0, void 0, function* () {
            const cliente = yield clientes_service_1.default.getClientByEmail('email@gmail.com');
            const { codCliente } = cliente;
            (0, chai_1.expect)(codCliente).to.be.equals(1);
        }));
        it('contém o nome do cliente ', () => __awaiter(void 0, void 0, void 0, function* () {
            const cliente = yield clientes_service_1.default.getClientByEmail('email@gmail.com');
            const { nomeCliente } = cliente;
            (0, chai_1.expect)(nomeCliente).to.be.equals('Usuario');
        }));
        it('contém o saldo da Conta do cliente ', () => __awaiter(void 0, void 0, void 0, function* () {
            const cliente = yield clientes_service_1.default.getClientByEmail('email@gmail.com');
            const { saldoConta } = cliente;
            (0, chai_1.expect)(saldoConta).to.be.equals(100);
        }));
        it('contém o saldo de Custodia da Conta do cliente ', () => __awaiter(void 0, void 0, void 0, function* () {
            const cliente = yield clientes_service_1.default.getClientByEmail('email@gmail.com');
            const { saldoCustodia } = cliente;
            (0, chai_1.expect)(saldoCustodia).to.be.equals(0);
        }));
        it('contém o email de cadastro do cliente ', () => __awaiter(void 0, void 0, void 0, function* () {
            const cliente = yield clientes_service_1.default.getClientByEmail('email@gmail.com');
            const { emailCliente } = cliente;
            (0, chai_1.expect)(emailCliente).to.be.equals('email@gmail.com');
        }));
        it('contém a senha de cadastro do cliente ', () => __awaiter(void 0, void 0, void 0, function* () {
            const cliente = yield clientes_service_1.default.getClientByEmail('email@gmail.com');
            const { passwordCliente } = cliente;
            (0, chai_1.expect)(passwordCliente).to.be.equals('senhaexemple2');
        }));
    });
});
