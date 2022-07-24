import {expect} from 'chai';
import model from '../../models/acoes.model';
import connection from '../../models/connection';
import sinon from 'sinon';

describe('Testa se a função getAllStocks', () => {
  before(() => {
    const executeReturn:any = [[
      {
        codAtivo: 1,
        codMercado: 'PETR4',
        valorAtivo: 29.33,
        qtdeDisponivel: 1000,
      }
    ]];
    sinon.stub(connection, 'execute').resolves(executeReturn);
  });

  after(() => {
    (connection.execute as sinon.SinonStub).restore();
  });
    describe('retorne:', () => {
      it('um array de objetos', async () => {
        const result = await model.getAllStocks();
        expect(result).to.haveOwnProperty('length');
      })
  });

  describe('verifica se os objetos retornados possuem:', () => {
    it('o código do stivo', async () => {
      const [result] = await model.getAllStocks();
      expect(result.codAtivo).to.be.equals(1);
    });

    it('o código de mercado', async () => {
      const [result] = await model.getAllStocks();
      expect(result.codMercado).to.be.equals('PETR4');
    });

    it('o valor do ativo', async () => {
      const [result] = await model.getAllStocks();
      expect(result.valorAtivo).to.be.equals(29.33);
    });

    it('quantidade disponível do ativo para compra', async () => {
      const [result] = await model.getAllStocks();
      expect(result.qtdeDisponivel).to.be.equals(1000);
    });
  });
});

describe('Testa se a função getStockByCode', () => {
  before(() => {
    const ExpectReturn :any = [[
      {
        codAtivo: 1,
        codMercado: 'PETR4',
        valorAtivo: 29.33,
        qtdeDisponivel: 1000,
      }
    ]];
    sinon.stub(connection, 'execute').resolves(ExpectReturn);
  });

  after(() => {
    (connection.execute as sinon.SinonStub).restore();
  });

  describe('retorna array com um objeto que:', () => {
    it('contém o código do ativo', async () => {
      const result =  await model.getStockByCode(1);
      expect(result).to.haveOwnProperty('length');
      const [acao] = result;
      expect(acao.codAtivo).to.be.equals(1);
    });

    it('contém o código de mercado do ativo', async () => {
      const [result] = await model.getStockByCode(1);
      expect(result.codMercado).to.be.equals('PETR4');
    })

    it('contém o valor do ativo', async () => {
      const [result] = await model.getStockByCode(1);
      expect(result.valorAtivo).to.be.equals(29.33);
    })

    it('contém a quantidade de compra disponível do ativo', async () => {
      const [result] = await model.getStockByCode(1);
      expect(result.qtdeDisponivel).to.be.equals(1000);
    })
  })
});

describe('Testa se a função updateByCode', () => {
  before(() => {
    const ExpectReturn: any = [
      {
        message: 'Operação realizada com sucesso'
      }
    ]

    ;
    sinon.stub(connection, 'execute').resolves(ExpectReturn);
  });

  after(() => {
    (connection.execute as sinon.SinonStub).restore();
  });

  describe('retorna um objeto que:', () => {
    it('contém a mensagem "Operação realizada com sucesso"', async () => {
      const {message} = await model.updateByCode(1000, 1);
      expect(message).to.be.equals('Operação realizada com sucesso');
    })
  })
});

describe('Testa se a função createAssets', () => {
  before(() => {
    const ExpectReturn: any = [
      {
        message: 'Ativo adicionado com sucesso'
      }
    ]
    ;
    sinon.stub(connection, 'execute').resolves(ExpectReturn);
  });

  after(() => {
    (connection.execute as sinon.SinonStub).restore();
  });

  describe('retorna um objeto que:', () => {
    it('contém a mensagem "Ativo adicionado com sucesso"', async () => {
      const {message} = await model.createAssets('MGLU3', 2.83, 10000);
      expect(message).to.be.equals('Ativo adicionado com sucesso');
    })
  })
});