import {expect} from 'chai';
import controller from '../controller/clientes.controller';
import service from '../service/clientes.service';
import sinon from 'sinon';


describe('Testa se a função getClientByCode', () => {
  const mockresult = {
      codCliente: 1,
      nomeCliente: "teste",
      saldoConta: 100.00,
      saldoCustodia: 0.00
  }
  const request: any = {};
  const response: any = {};
  beforeEach(() => {
    const expect = mockresult;
    request.params = {codCliente: 1};
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(expect);
    sinon.stub(service, 'getClientByCode').resolves(expect);
  });
  afterEach(() => {
    (service.getClientByCode as sinon.SinonStub).restore();
  });
  it('é chamado o status com o código 200', async () => {
    await controller.getClientByCode(request, response);
    expect(response.status.calledWith(200)).to.be.true;
  });
  it('é chamado o json com as informações do cliente', async () => {
    await controller.getClientByCode(request, response);
    expect(response.json.calledWith(mockresult)).to.be.true;
  });
})


describe('Testa se a função depositByCode', () => {
  const mockresult = {
    message: "Depósito realizado com sucesso"
  }
  const request: any = {};
  const response: any = {};
  beforeEach(() => {
    const expect = mockresult;
    request.body = {
      CodCliente: 1,
      Valor: 100.50
      };
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(expect);
    sinon.stub(service, 'depositByCode').resolves(expect);
  });
  afterEach(() => {
    (service.depositByCode as sinon.SinonStub).restore();
  });
  it('é chamado o status com o código 200', async () => {
    await controller.depositByCode(request, response);
    expect(request.body).to.have.keys('CodCliente', 'Valor');
    expect(response.status.calledWith(200)).to.be.true;
  });
  it('é chamado o json com a mensagem: "Depósito realizado com sucesso"', async () => {
    await controller.depositByCode(request, response);
    expect(request.body).to.have.keys('CodCliente', 'Valor');
    expect(response.json.calledWith(mockresult)).to.be.true;
  });
})


describe('Testa se a função withdrawByCode', () => {
  const mockresult = {
    message: "Saque realizado com sucesso"
  }
  const request: any = {};
  const response: any = {};
  beforeEach(() => {
    const expect = mockresult;
    request.body = {
      CodCliente: 1,
      Valor: 50
      };
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(expect);
    sinon.stub(service, 'withdrawByCode').resolves(expect);
  });
  afterEach(() => {
    (service.withdrawByCode as sinon.SinonStub).restore();
  });
  it('é chamado o status com o código 200', async () => {
    await controller.withdrawByCode(request, response);
    expect(request.body).to.have.keys('CodCliente', 'Valor');
    expect(response.status.calledWith(200)).to.be.true;
  });
  it('é chamado o json com a mensagem: "Saque realizado com sucesso"', async () => {
    await controller.withdrawByCode(request, response);
    expect(request.body).to.have.keys('CodCliente', 'Valor');
    expect(response.json.calledWith(mockresult)).to.be.true;
  });
})


describe('Testa se a função createClient', () => {
  const mockresult = {
    status: 200,
    response: "Cliente criado com sucesso"
  }
  const request: any = {};
  const response: any = {};
  beforeEach(() => {
    const expect = mockresult;
    request.body = {
      nomeCliente: "xablau",
      emailCliente: "xablau@blau.com",
      saldoConta: 0.00,
      saldoCustodia: 0.00,
      passwordCliente: 11111111
      };
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns({message: expect.response});
    sinon.stub(service, 'createClient').resolves(expect);
  });
  afterEach(() => {
    (service.createClient as sinon.SinonStub).restore();
  });
  it('é chamado o status com o código 200', async () => {
    await controller.createClient(request, response);
    expect(request.body).to.have.keys('nomeCliente', 'emailCliente', 'saldoConta', 'saldoCustodia', 'passwordCliente');
    expect(response.status.calledWith(200)).to.be.true;
  });
  it('é chamado o json com a mensagem: "Cliente criado com sucesso"', async () => {
    await controller.createClient(request, response);
    expect(response.json.calledWith({message: mockresult.response})).to.be.true;
  });
})
