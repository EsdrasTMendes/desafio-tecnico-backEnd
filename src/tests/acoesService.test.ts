import {expect} from 'chai';
import service from '../service/acoes.service';
import sinon from 'sinon';


  describe('Testa se a função getAllStocks', () => {
    before(() => {
      const ExpectReturn = [
        {
          codAtivo: 1,
          codMercado: 'PETR4',
          valorAtivo: 29.33,
          qtdeDisponivel: 1000,
        }
      ];
      sinon.stub(service, 'getAllStocks').resolves(ExpectReturn);
    });
  
    after(() => {
      (service.getAllStocks as sinon.SinonStub).restore();
    });
      describe('retorne:', () => {
        it('um array de objetos', async () => {
          const acao = await service.getAllStocks();
          expect(acao).to.haveOwnProperty('length');
        })
    });
  
    describe('verifica se os objetos retornados possuem:', () => {
      it('o código do stivo', async () => {
        const [acao] = await service.getAllStocks();
        expect(acao.codAtivo).to.be.equals(1);
      });
  
      it('o código de mercado', async () => {
        const [acao] = await service.getAllStocks();
        expect(acao.codMercado).to.be.equals('PETR4');
      });
  
      it('o valor do ativo', async () => {
        const [acao] = await service.getAllStocks();
        expect(acao.valorAtivo).to.be.equals(29.33);
      });
  
      it('quantidade disponível do ativo para compra', async () => {
        const [acao] = await service.getAllStocks();
        expect(acao.qtdeDisponivel).to.be.equals(1000);
      });
    });
  });


  describe('Testa se a função getStockByCode', () => {
    before(() => {
      const ExpectReturn =
        {
          codAtivo: 1,
          codMercado: 'PETR4',
          valorAtivo: 29.33,
          qtdeDisponivel: 1000,
        };
      sinon.stub(service, 'getStockByCode').resolves(ExpectReturn);
    });
  
    after(() => {
      (service.getStockByCode as sinon.SinonStub).restore();
    });
  
    describe('retorna um objeto que:', () => {
      it('contém o código do ativo', async () => {
        const acao =  await service.getStockByCode(1);
        expect(acao.codAtivo).to.be.equals(1);
      });
  
      it('contém o código de mercado do ativo', async () => {
        const acao = await service.getStockByCode(1);
        expect(acao.codMercado).to.be.equals('PETR4');
      })
  
      it('contém o valor do ativo', async () => {
        const acao = await service.getStockByCode(1);
        expect(acao.valorAtivo).to.be.equals(29.33);
      })
  
      it('contém a quantidade de compra disponível do ativo', async () => {
        const acao = await service.getStockByCode(1);
        expect(acao.qtdeDisponivel).to.be.equals(1000);
      })
    })
  });


  describe('Testa se a função updateByCode', () => {
    before(() => {
      const ExpectReturn = 
        {
          message: 'Operação realizada com sucesso'
        }
      ;
      sinon.stub(service, 'updateByCode').resolves(ExpectReturn);
    });
  
    after(() => {
      (service.updateByCode as sinon.SinonStub).restore();
    });
  
    describe('retorna um objeto que:', () => {
      it('contém a mensagem "Operação realizada com sucesso"', async () => {
        const {message} = await service.updateByCode(1000, 1);
        expect(message).to.be.equals('Operação realizada com sucesso');
      })
    })
  });


  describe('Testa se a função createAssets', () => {
    before(() => {
      const ExpectReturn = 
        {
          status: 200,
          response: 'Ativo criado com sucesso!'
        };
      sinon.stub(service, 'createAssets').resolves(ExpectReturn);
    });
  
    after(() => {
      (service.createAssets as sinon.SinonStub).restore();
    });
  
    describe('retorna um objeto que:', () => {
      it('contém a mensagem "Operação realizada com sucesso"', async () => {
        const create = {
          codMercado: 'MGLU3',
          valorAtivo: 2.83, 
          qtdeDisponivel: 10000
        }
        const {status} = await service.createAssets(create);
        expect(status).to.be.equals(200);
      })
    })
  });