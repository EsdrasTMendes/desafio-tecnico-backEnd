import {expect} from 'chai';
import model from '../models/investimentos.model';
import sinon from 'sinon';

describe('Testa se a função createInvestiment', () => {
  before(() => {
    const ExpectReturn = 
      {
        message: 'Operação realizada com sucesso'
      }
    ;
    sinon.stub(model, 'createInvestiment').resolves(ExpectReturn);
  });

  after(() => {
    (model.createInvestiment as sinon.SinonStub).restore();
  });

  describe('retorna um objeto que:', () => {
    it('contém a mensagem "Operação realizada com sucesso"', async () => {
      const {message} = await model.createInvestiment(1, 2, 100); 
      expect(message).to.be.equals('Operação realizada com sucesso');
    })
  })
});

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
    sinon.stub(model, 'getInvestimentByClient').resolves(ExpectReturn);
  });

  after(() => {
    (model.getInvestimentByClient as sinon.SinonStub).restore();
  });

  describe('retorna um array de objetos que:', () => {
    it('contém o id do investimento', async () => {
      const [investimento] = await model.getInvestimentByClient(1);
      expect(investimento.id).to.be.equals(1);
    })
    it('contém o codigo do cliente', async () => {
      const [investimento] = await model.getInvestimentByClient(1);
      expect(investimento.codCliente).to.be.equals(1);
    })
    it('contém o codigo do ativo', async () => {
      const [investimento] = await model.getInvestimentByClient(1);
      expect(investimento.codAtivo).to.be.equals(1);
    })
    it('contém a quantidade de ativos', async () => {
      const [investimento] = await model.getInvestimentByClient(1);
      expect(investimento.qtdeAtivo).to.be.equals(100);
    })
  })
});

describe('Testa se a função getInvestimentByClientAndAsset', () => {
  before(() => {
    const ExpectReturn = [
      {
        id: 1,
        codCliente: 1,
        codAtivo: 1,
        qtdeAtivo: 100,
      }
    ]
    sinon.stub(model, 'getInvestimentByClientAndAsset').resolves(ExpectReturn);
  });

  after(() => {
    (model.getInvestimentByClientAndAsset as sinon.SinonStub).restore();
  });

  describe('retorna um array de objetos que:', () => {
    it('contém o id do investimento', async () => {
      const [investimento] = await model.getInvestimentByClientAndAsset(1, 1);
      expect(investimento.id).to.be.equals(1);
    })
    it('contém o codigo do cliente', async () => {
      const [investimento] = await model.getInvestimentByClientAndAsset(1, 1);
      expect(investimento.codCliente).to.be.equals(1);
    })
    it('contém o codigo do ativo', async () => {
      const [investimento] = await model.getInvestimentByClientAndAsset(1, 1);
      expect(investimento.codAtivo).to.be.equals(1);
    })
    it('contém a quantidade de ativos', async () => {
      const [investimento] = await model.getInvestimentByClientAndAsset(1, 1);
      expect(investimento.qtdeAtivo).to.be.equals(100);
    })
  })
});



describe('Testa se a função updateInvestiment', () => {
  before(() => {
    const ExpectReturn = 
    {
      message: 'Operação realizada com sucesso'
    };
    sinon.stub(model, 'updateInvestiment').resolves(ExpectReturn);
  });

  after(() => {
    (model.updateInvestiment as sinon.SinonStub).restore();
  });

  describe('retorna um objeto que:', () => {
    it('contém a mensagem "Operação realizada com sucesso"', async () => {
      const {message} = await model.updateInvestiment(1, 1);
      expect(message).to.be.equals('Operação realizada com sucesso')
    })
  })
});



describe('Testa se a função deleteInvestiment', () => {
  before(() => {
    const ExpectReturn = 
    {
      message: 'Operação realizada com sucesso'
    };
    sinon.stub(model, 'deleteInvestiment').resolves(ExpectReturn);
  });

  after(() => {
    (model.deleteInvestiment as sinon.SinonStub).restore();
  });

  describe('retorna um objeto que:', () => {
    it('contém a mensagem "Operação realizada com sucessoo"', async () => {
      const {message} = await model.deleteInvestiment(1, 1);
      expect(message).to.be.equals('Operação realizada com sucesso');
    })
  })
});