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
const authentication_service_1 = __importDefault(require("../service/authentication.service"));
const sinon_1 = __importDefault(require("sinon"));
describe('Testa se a função createAssets', () => {
    before(() => {
        const ExpectReturn = {
            status: 200,
            response: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
        };
        sinon_1.default.stub(authentication_service_1.default, 'authentication').resolves(ExpectReturn);
    });
    after(() => {
        authentication_service_1.default.authentication.restore();
    });
    describe('retorna um objeto que:', () => {
        it('contém o status 200', () => __awaiter(void 0, void 0, void 0, function* () {
            const { status } = yield authentication_service_1.default.authentication('email@email.com', 'senhasenha2');
            (0, chai_1.expect)(status).to.be.equals(200);
        }));
        it('contém um objeto response com o token', () => __awaiter(void 0, void 0, void 0, function* () {
            const { response } = yield authentication_service_1.default.authentication('email@email.com', 'senhasenha2');
            (0, chai_1.expect)(response).to.be.equals('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9');
        }));
    });
});
