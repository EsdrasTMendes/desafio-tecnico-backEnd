import {expect} from 'chai';
import controller from '../controller/acoes.controller';
import service from '../service/acoes.service';
import sinon from 'sinon';

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
  ]
  const request: any = {};
  const response: any = {};
  beforeEach(() => {
    const expectAcoes = acoes;
    request.body = {};
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(expectAcoes);
    sinon.stub(service, 'getAllStocks').resolves(expectAcoes);
  });
  afterEach(() => {
    (service.getAllStocks as sinon.SinonStub).restore();
  });
  it('é chamado o status com o código 200', async () => {
    await controller.getAllStocks(request, response);
    expect(response.status.calledWith(200)).to.be.true;
  });
  it('é chamado o json com todas as ações', async () => {
    await controller.getAllStocks(request, response);
    expect(response.json.calledWith(acoes)).to.be.true;
  });
})


describe('Testa se a função getStockByCode', () => {
  const request: any = {};
  const response: any = {};
  const acao = {
    codAtivo: 2,
    codMercado: 'MGLU3',
    valorAtivo: 2.83,
    qtdeDisponivel: 100,
  }
  beforeEach(() => {
    const expectReturn = acao;
    request.params = {codAtivo: 2};
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(expectReturn);
    sinon.stub(service, 'getStockByCode').resolves(expectReturn);
  });
  afterEach(() => {
    (service.getStockByCode as sinon.SinonStub).restore();
  });
  it('é chamado o status com o código 200', async () => {
    await controller.getStockByCode(request, response);
    expect(response.status.calledWith(200)).to.be.true;
  });
  it('é chamado o json com a ação correspondente ao codigo no request.params todas as ações', async () => {
    const {codAtivo} = request.params;
    await controller.getStockByCode(request, response);
    expect(codAtivo).to.be.equal(acao.codAtivo);
    expect(response.json.calledWith(acao)).to.be.true;
  });
})


describe('Testa se a função createAssets', () => {
  const request: any = {};
  const response: any = {};
  const acao = {
    status: 200,
    response: 'Ativo adidionado com sucesso.'
  }
  beforeEach(() => {
    const expectReturn = acao;
    request.body = {codMercado: 'VALE3', valorAtivo: 60, qtdeDisponivel: 1000}
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(expectReturn.response);
    sinon.stub(service, 'createAssets').resolves(expectReturn);
  });
  afterEach(() => {
    (service.createAssets as sinon.SinonStub).restore();
  });
  it('é chamado o status com o código 200', async () => {
    await controller.createAssets(request, response);
    expect(response.status.calledWith(200)).to.be.true;
  });
  it('é chamado o json com a mensagem "Ativo adicionado com sucesso."', async () => {
    const body = request.body;
    await controller.createAssets(request, response);
    expect(body).to.have.keys('codMercado', 'valorAtivo', 'qtdeDisponivel');
    expect(response.json.calledWith(acao.response)).to.be.true;
  });
})