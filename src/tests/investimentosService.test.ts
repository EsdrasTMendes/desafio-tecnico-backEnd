import {expect} from 'chai';
import service from '../service/investimentos.service';
import sinon from 'sinon';

  // createInvestiment
describe('Testa se a função createInvestiment', () => {
  before(() => {
    const ExpectReturn =  {
      status: 200, 
      response: {
        codCliente: 1, 
        codAtivo: 1,
        qtdeAtivo: 10
      },
    };
    sinon.stub(service, 'createInvestiment').resolves(ExpectReturn);
  });

  after(() => {
    (service.createInvestiment as sinon.SinonStub).restore();
  });

  describe('retorna um objeto que:', () => {
    it('contém o status 200', async () => {
      const create = {
        codCliente: 1,
        codAtivo: 1,
        qtdeAtivo:  10
      };
      const{status} = await service.createInvestiment(create);
      expect(status).to.be.equals(200);
    })
    it('contém um objeto com as informações do investimento', async () => {
      const create = {
        codCliente: 1,
        codAtivo: 1,
        qtdeAtivo:  10
      };
      const{response} = await service.createInvestiment(create);
      expect(response).to.be.a.keys('codAtivo','codCliente','qtdeAtivo');
      expect(response.codAtivo).to.be.equals(1);
      expect(response.codCliente).to.be.equals(1);
      expect(response.qtdeAtivo).to.be.equals(10);
    })
  })
});


  // getInvestimentByClient

  describe('Testa se a função getInvestimentByClient', () => {
    before(() => {
      const ExpectReturn = [
        {
          id: 1,
          codCliente: 1,
          codAtivo: 1,
          qtdeAtivo: 100,
        }
      ]
      sinon.stub(service, 'getInvestimentByClient').resolves(ExpectReturn);
    });
  
    after(() => {
      (service.getInvestimentByClient as sinon.SinonStub).restore();
    });
  
    describe('retorna um array de objetos que:', () => {
      it('contém o id do investimento', async () => {
        const [investimento] = await service.getInvestimentByClient(1);
        expect(investimento.id).to.be.equals(1);
      })
      it('contém o codigo do cliente', async () => {
        const [investimento] = await service.getInvestimentByClient(1);
        expect(investimento.codCliente).to.be.equals(1);
      })
      it('contém o codigo do ativo', async () => {
        const [investimento] = await service.getInvestimentByClient(1);
        expect(investimento.codAtivo).to.be.equals(1);
      })
      it('contém a quantidade de ativos', async () => {
        const [investimento] = await service.getInvestimentByClient(1);
        expect(investimento.qtdeAtivo).to.be.equals(100);
      })
    })
  });
  // getInvestimentByClientAndAsset

  describe('Testa se a função getInvestimentByClientAndAsset', () => {
    before(() => {
      const ExpectReturn = 
        {
          id: 1,
          codCliente: 1,
          codAtivo: 1,
          qtdeAtivo: 100,
        };
      sinon.stub(service, 'getInvestimentByClientAndAsset').resolves(ExpectReturn);
    });
  
    after(() => {
      (service.getInvestimentByClientAndAsset as sinon.SinonStub).restore();
    });
  
    describe('retorna um array de objetos que:', () => {
      it('contém o id do investimento', async () => {
        const investimento = await service.getInvestimentByClientAndAsset(1, 1);
        expect(investimento.id).to.be.equals(1);
      })
      it('contém o codigo do cliente', async () => {
        const investimento = await service.getInvestimentByClientAndAsset(1, 1);
        expect(investimento.codCliente).to.be.equals(1);
      })
      it('contém o codigo do ativo', async () => {
        const investimento = await service.getInvestimentByClientAndAsset(1, 1);
        expect(investimento.codAtivo).to.be.equals(1);
      })
      it('contém a quantidade de ativos', async () => {
        const investimento = await service.getInvestimentByClientAndAsset(1, 1);
        expect(investimento.qtdeAtivo).to.be.equals(100);
      })
    })
  });
  // sellInvestiment

  describe('Testa se a função deleteInvestiment', () => {
    before(() => {
      const ExpectReturn =  {
        status: 200, 
        response: {
          codCliente: 1, 
          codAtivo: 1,
          qtdeAtivo: 10
        },
      }
      sinon.stub(service, 'sellInvestiment').resolves(ExpectReturn);
    });
  
    after(() => {
      (service.sellInvestiment as sinon.SinonStub).restore();
    });
  
    describe('retorna um objeto que:', () => {
      it('contém o status 200', async () => {
        const create = {
          codCliente: 1,
          codAtivo: 1,
          qtdeAtivo:  10
        };
        const{status} = await service.createInvestiment(create);
        expect(status).to.be.equals(200);
      })
      it('contém um objeto com as informações do investimento', async () => {
        const create = {
          codCliente: 1,
          codAtivo: 1,
          qtdeAtivo:  10
        };
        const{response} = await service.createInvestiment(create);
        expect(response).to.be.a.keys('codAtivo','codCliente','qtdeAtivo');
        expect(response.codAtivo).to.be.equals(1);
        expect(response.codCliente).to.be.equals(1);
        expect(response.qtdeAtivo).to.be.equals(10);
      })
    })
  });