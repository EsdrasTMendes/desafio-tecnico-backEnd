import {expect} from 'chai';
import model from '../../models/clientes.model';
import connection from '../../models/connection';
import sinon from 'sinon';

describe('Testa se a função getClientsByCode', () => {
  let executeSpy: any;
  before(() => {
    const ExpectReturn: any= [[{
        codCliente: 1,
        nomeCliente: "Esdras Tenório Mendes",
        saldoConta: 100.00,
        saldoCustodia: 0.00
      }]];
    executeSpy = sinon.stub(connection, 'execute').resolves(ExpectReturn);
  });

  after(() => {
    (connection.execute as sinon.SinonStub).restore();
  });
    describe('retorna um objeto que:', () => {
    it('contém o código do cliente', async () => {
        const [cliente] = await model.getClientsByCode(1);
        const {codCliente} = cliente;
        expect(codCliente).to.be.equals(1);
    });

    it('contém o nome do cliente', async () => {
      const [cliente] = await model.getClientsByCode(1);
      const {nomeCliente} = cliente;
      expect(nomeCliente).to.be.equals('Esdras Tenório Mendes')
    });

    it('contém o saldo da conta do cliente', async () => {
      const [cliente] = await model.getClientsByCode(1);
      const {saldoConta} = cliente;
      expect(saldoConta).to.be.equals(100);
    });

    it('contém o saldo de custodia do cliente', async () => {
      const [cliente] = await model.getClientsByCode(1);
      const {saldoCustodia} = cliente;
      expect(saldoCustodia).to.be.equals(0);
    });
  });
});

describe('Testa se a função updateClientByCode', () => {
  before(() => {
    const ExpectReturn: any = [{
    message: 'Cliente atualizado com sucesso'
    }];
    sinon.stub(connection,'execute').resolves(ExpectReturn);
  });

  after(() => {
    (connection.execute as sinon.SinonStub).restore();
  });

    it('retorna a mensagem "Cliente autualizado com sucesso"', async () => {
      const {message} = await model.updateClientByCode(1, 20, 10);
      expect(message).to.be.equals('Cliente atualizado com sucesso');
  });
});

describe('Testa se a função withdrawAndDepositByCode', () => {
  before(() => {
    const ExpectReturn: any = [{
    message: 'Operação realizada com sucesso'
    }];
    sinon.stub(connection, 'execute').resolves(ExpectReturn);
  });

  after(() => {
    (connection.execute as sinon.SinonStub).restore();
  });

    it('retorna a mensagem "Operação realizada com sucesso"', async () => {
      const {message} = await model.withdrawAndDepositByCode(1, 20);
      expect(message).to.be.equals('Operação realizada com sucesso');
  });
});

describe('Testa se a função createClient', () => {
  before(() => {
    const ExpectReturn: any = [{
    message: 'Cadastro criado com sucesso.'
    }];
    sinon.stub(connection, 'execute').resolves(ExpectReturn);
  });

  after(() => {
    (connection.execute as sinon.SinonStub).restore();
  });

    it('retorna a mensagem "Cadastro criado com sucesso" ', async () => {
      const {message} = await model.createClient('Esdras Mendes', 'esdrastmendes@gmail.com', 10, 0, 'senhateste1');
      expect(message).to.be.equals('Cadastro criado com sucesso.');
  });
});

describe('Testa se a função getClientByEmailAndPassword', () => {
  before(() => {
    const ExpectReturn: any = [[{
      codCliente: 1,
      nomeCliente: 'Esdras Tenório Mendes',
      saldoConta: 10,
      saldoCustodia: 0,
      emailCliente: 'esdrastmendes@gmail.com',
      passwordCliente: '123456789',
    }]];
    sinon.stub(connection, 'execute').resolves(ExpectReturn);
  });

  after(() => {
    (connection.execute as sinon.SinonStub).restore();
  });

    describe('retorna um objeto que:', () => {
      it('contém o código do cliente ', async () => {
      const [cliente] = await model.getClientByEmailAndPassword('Esdras Tenório Mendes', 'senhateste1');
        const {codCliente} = cliente;
        expect(codCliente).to.be.equals(1);
      });
  
      it('contém o nome do cliente ', async () => {
        const [cliente] = await model.getClientByEmailAndPassword('Esdras Tenório Mendes', 'senhateste1');
        const {nomeCliente} = cliente;
        expect(nomeCliente).to.be.equals('Esdras Tenório Mendes');
      });
  
      it('contém o saldo da Conta do cliente ', async () => {
        const [cliente] = await model.getClientByEmailAndPassword('Esdras Tenório Mendes', 'senhateste1');
        const {saldoConta} = cliente;
        expect(saldoConta).to.be.equals(10);
      });
  
      it('contém o saldo de Custodia da Conta do cliente ', async () => {
        const [cliente] = await model.getClientByEmailAndPassword('Esdras Tenório Mendes', 'senhateste1');
        const {saldoCustodia} = cliente;
        expect(saldoCustodia).to.be.equals(0);
      });
  
      it('contém o email de cadastro do cliente ', async () => {
        const [cliente] = await model.getClientByEmailAndPassword('Esdras Tenório Mendes', 'senhateste1');
        const {emailCliente} = cliente;
        expect(emailCliente).to.be.equals('esdrastmendes@gmail.com');
      });
  
      it('contém a senha de cadastro do cliente ', async () => {
        const [cliente] = await model.getClientByEmailAndPassword('Esdras Tenório Mendes', 'senhateste1');
        const {passwordCliente} = cliente;
        expect(passwordCliente).to.be.equals('123456789');
    });
  });
});

describe('Testa se a função getClientByEmail', () => {
  before(() => {
    const ExpectReturn: any = [[{
      codCliente: 1,
      nomeCliente: 'Esdras Tenório Mendes',
      saldoConta: 10,
      saldoCustodia: 0,
      emailCliente: 'esdrastmendes@gmail.com',
      passwordCliente: '123456789',
    }]];
    sinon.stub(connection, 'execute').resolves(ExpectReturn);
  });

  after(() => {
    (connection.execute as sinon.SinonStub).restore();
  });

  describe('retorna um objeto que:', () => {
    it('contém o código do cliente ', async () => {
      const [cliente] = await model.getClientByEmail('esdrastmendes@gmail.com');
      const {codCliente} = cliente;
      expect(codCliente).to.be.equals(1);
    });

    it('contém o nome do cliente ', async () => {
      const [cliente] = await model.getClientByEmail('esdrastmendes@gmail.com');
      const {nomeCliente} = cliente;
      expect(nomeCliente).to.be.equals('Esdras Tenório Mendes');
    });

    it('contém o saldo da Conta do cliente ', async () => {
      const [cliente] = await model.getClientByEmail('esdrastmendes@gmail.com');
      const {saldoConta} = cliente;
      expect(saldoConta).to.be.equals(10);
    });

    it('contém o saldo de Custodia da Conta do cliente ', async () => {
      const [cliente] = await model.getClientByEmail('esdrastmendes@gmail.com');
      const {saldoCustodia} = cliente;
      expect(saldoCustodia).to.be.equals(0);
    });

    it('contém o email de cadastro do cliente ', async () => {
      const [cliente] = await model.getClientByEmail('esdrastmendes@gmail.com');
      const {emailCliente} = cliente;
      expect(emailCliente).to.be.equals('esdrastmendes@gmail.com');
    });

    it('contém a senha de cadastro do cliente ', async () => {
      const [cliente] = await model.getClientByEmail('esdrastmendes@gmail.com');
      const {passwordCliente} = cliente;
      expect(passwordCliente).to.be.equals('123456789');
    });
  });
});
