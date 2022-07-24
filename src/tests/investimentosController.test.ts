import {expect} from 'chai';
import controller from '../controller/investimentos.controller';
import service from '../service/investimentos.service';
import sinon from 'sinon';


describe('Testa se a função createInvestiment', () => {
  const mockresult = {
    status: 200,
    response: {
      codCliente: 1,
      codAtivo: 1,
      qtdeAtivo: 10,
    },
  }
  const request: any = {};
  const response: any = {};
  beforeEach(() => {
    const expect = mockresult;
    request.body = {
      codCliente: 2,
      codAtivo: 9,
      qtdeAtivo: 99
      };
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(expect.response);
    sinon.stub(service, 'createInvestiment').resolves(expect);
  });
  afterEach(() => {
    (service.createInvestiment as sinon.SinonStub).restore();
  });
  it('é chamado o status com o código 200', async () => {
    await controller.createInvestiment(request, response);
    expect(request.body).to.have.keys('codCliente', 'codAtivo', 'qtdeAtivo');
    expect(response.status.calledWith(200)).to.be.true;
  });
  it('é chamado o json com as informações do investimento', async () => {
    await controller.createInvestiment(request, response);
    expect(response.json.calledWith(mockresult.response)).to.be.true;
  });
})


describe('Testa se a função getInvestimentByClient', () => {
  const mockresult = [
    {
      codCliente: 2,
      codAtivo: 9,
      qtdeAtivo: 99,
      Valor: 4.42
    }
  ]
  const request: any = {};
  const response: any = {};
  beforeEach(() => {
    const expect = mockresult;
    request.params = {codCliente: 2};
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(expect);
    sinon.stub(service, 'getInvestimentByClient').resolves(expect);
  });
  afterEach(() => {
    (service.getInvestimentByClient as sinon.SinonStub).restore();
  });
  it('é chamado o status com o código 200', async () => {
    await controller.getInvestimentByClient(request, response);
    expect(response.status.calledWith(200)).to.be.true;
  });
  it('é chamado o json com os investimentos do cliente', async () => {
    await controller.getInvestimentByClient(request, response);
    const {codCliente} = request.params;
    expect(mockresult[0].codCliente).to.be.equal(codCliente);
    expect(response.json.calledWith(mockresult)).to.be.true;
  });
})


describe('Testa se a função sellInvestiment', () => {
  const mockresult = {
      status: 200,
      response: {
      codCliente: 1,
      codAtivo: 2,
      qtdeAtivo: 70
      }
  }
  const request: any = {};
  const response: any = {};
  beforeEach(() => {
    const expect = mockresult;
    request.body = {
      codCliente: 2,
      codAtivo: 9,
      qtdeAtivo: 70
      }
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(expect.response);
    sinon.stub(service, 'sellInvestiment').resolves(expect);
  });
  afterEach(() => {
    (service.sellInvestiment as sinon.SinonStub).restore();
  });
  it('é chamado o status com o código 200', async () => {
    await controller.sellInvestiment(request, response);
    expect(request.body).to.have.keys('codCliente', 'codAtivo', 'qtdeAtivo');
    expect(response.status.calledWith(200)).to.be.true;
  });
  it('é chamado o json com as informações da venda', async () => {
    await controller.sellInvestiment(request, response);
    expect(response.json.calledWith(mockresult.response)).to.be.true;
  });
})