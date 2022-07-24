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
const authcontroller_1 = __importDefault(require("../../controller/authcontroller"));
const authentication_service_1 = __importDefault(require("../../service/authentication.service"));
const sinon_1 = __importDefault(require("sinon"));
describe('Testa se a função authentication', () => {
    const mockresult = {
        status: 200,
        response: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    };
    const request = {};
    const response = {};
    beforeEach(() => {
        const expect = mockresult;
        request.body = {
            email: "xablautest@blau.com",
            password: "senhateste2"
        };
        response.status = sinon_1.default.stub().returns(response);
        response.json = sinon_1.default.stub().returns({ token: expect.response });
        sinon_1.default.stub(authentication_service_1.default, 'authentication').resolves(expect);
    });
    afterEach(() => {
        authentication_service_1.default.authentication.restore();
    });
    it('é chamado o status com o código 200', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, authcontroller_1.default)(request, response);
        (0, chai_1.expect)(request.body).to.have.keys('email', 'password');
        (0, chai_1.expect)(response.status.calledWith(200)).to.be.true;
    }));
    it('é chamado o json com as informações do token', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, authcontroller_1.default)(request, response);
        (0, chai_1.expect)(response.json.calledWith({ token: mockresult.response })).to.be.true;
    }));
});
