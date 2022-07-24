import {expect} from 'chai';
import service from '../../service/clientes.service';
import model from '../..//models/clientes.model';
import sinon from 'sinon';

describe('Testa se a função getClientByCode', () => {
  before(() => {
    const ExpectReturn = 
    [{
      codCliente: 1,
      nomeCliente: 'Usuario',
      saldoConta: 100, 
      saldoCustodia: 10
    }];
    sinon.stub(model, 'getClientsByCode').resolves(ExpectReturn);
  });

  after(() => {
    (model.getClientsByCode as sinon.SinonStub).restore();
  });

  describe('retorna um objeto que:', () => {
    it('contém o código do cliente', async () => {
        const cliente = await service.getClientByCode(1);
        const {codCliente} = cliente;
        expect(codCliente).to.be.equals(1);
    });

    it('contém o nome do cliente', async () => {
      const cliente = await service.getClientByCode(1);
      const {nomeCliente} = cliente;
      expect(nomeCliente).to.be.equals('Usuario')
    });

    it('contém o saldo da conta do cliente', async () => {
      const cliente = await service.getClientByCode(1);
      const {saldoConta} = cliente;
      expect(saldoConta).to.be.equals(100);
    });

    it('contém o saldo de custodia do cliente', async () => {
      const cliente = await service.getClientByCode(1);
      const {saldoCustodia} = cliente;
      expect(saldoCustodia).to.be.equals(10);
    });
  });
});


describe('Testa se a função updateClientByCode', () => {
  before(() => {
    const ExpectReturn = {
      message: 'Cliente atualizado com sucesso'
    };
    sinon.stub(model, 'updateClientByCode').resolves(ExpectReturn);
  });

  after(() => {
    (model.updateClientByCode as sinon.SinonStub).restore();
  });

  describe('retorna um objeto que:', () => {
    it('contém a mensagem "Cliente atualizado com sucesso"', async () => {
      const update = {
        codCliente: 1,
        saldoConta: 100,
        saldoCustodia: 10,
      }
      const {message} = await service.updateClientByCode(update);
      expect(message).to.be.equals('Cliente atualizado com sucesso');
    })
  })
});


describe('Testa se a função withdrawByCode', () => {
  before(() => {
    const ExpectReturn = 
    {
      message: 'Operação realizada com sucesso'
    };
    sinon.stub(model, 'withdrawAndDepositByCode').resolves(ExpectReturn);
  });

  after(() => {
    (model.withdrawAndDepositByCode as sinon.SinonStub).restore();
  });

  describe('retorna um objeto que:', () => {
    it('contém a mensagem "Operação realizada com sucesso"', async () => {
      const update = {
        CodCliente: 1,
        Valor: 100
      } 
      const {message} = await service.withdrawByCode(update);
      expect(message).to.be.equals('Operação realizada com sucesso');
    })
  })
}); 


describe('Testa se a função depositByCode', () => {
  before(() => {
    const ExpectReturn = 
    {
      message: 'Operação realizada com sucesso'
    };
    sinon.stub(model, 'withdrawAndDepositByCode').resolves(ExpectReturn);
  });

  after(() => {
    (model.withdrawAndDepositByCode as sinon.SinonStub).restore();
  });

  describe('retorna um objeto que:', () => {
    it('contém a mensagem "Operação realizada com sucesso"', async () => {
      const update = {
        CodCliente: 1,
        Valor: 100
      } 
      const {message} = await service.depositByCode(update);
      expect(message).to.be.equals('Operação realizada com sucesso');
    })
  })
});


describe('Testa se a função createClient', () => {
  before(() => {
    const ExpectReturn = {
        status: 200, 
        response: 'Cliente criado com sucesso'
    };
    sinon.stub(service, 'createClient').resolves(ExpectReturn);
  });

  after(() => {
    (service.createClient as sinon.SinonStub).restore();
  });

  describe('retorna um objeto que:', () => {
    it('contém o status 200', async () => {
      const create = {
        codCliente: 1,
        nomeCliente: 'Usuario',
        saldoConta: 100,
        saldoCustodia: 0,
        emailCliente: 'email@gmail.com',
        passwordCliente: 'senhaexemple2',
      }
      const {status} = await service.createClient(create);
      expect(status).to.be.equals(200);
    });

    it('contém a mensagem "Cliente criado com sucesso"', async () => {
      const create = {
        codCliente: 1,
        nomeCliente: 'Usuario',
        saldoConta: 100,
        saldoCustodia: 0,
        emailCliente: 'email@gmail.com',
        passwordCliente: 'senhaexemple2',
      }
      const {response} = await service.createClient(create);
      expect(response).to.be.equals('Cliente criado com sucesso');
    });
  })
});

describe('Testa se a função getClientByEmailAndPassword', () => {
  before(() => {
    const ExpectReturn = [{
      codCliente: 1,
      nomeCliente: 'Usuario',
      saldoConta: 100,
      saldoCustodia: 0,
      emailCliente: 'email@gmail.com',
      passwordCliente: 'senhaexemple2',
    }]
    sinon.stub(model, 'getClientByEmailAndPassword').resolves(ExpectReturn);
  });

  after(() => {
    (model.getClientByEmailAndPassword as sinon.SinonStub).restore();
  });

  describe('retorna um objeto que:', () => {
    it('contém o código do cliente ', async () => {
    const cliente = await service.getClientByEmailAndPassword('Usuario', 'senhaexemple2');
      const {codCliente} = cliente;
      expect(codCliente).to.be.equals(1);
    });

    it('contém o nome do cliente ', async () => {
      const cliente = await service.getClientByEmailAndPassword('Usuario', 'senhaexemple2');
      const {nomeCliente} = cliente;
      expect(nomeCliente).to.be.equals('Usuario');
    });

    it('contém o saldo da Conta do cliente ', async () => {
      const cliente = await service.getClientByEmailAndPassword('Usuario', 'senhaexemple2');
      const {saldoConta} = cliente;
      expect(saldoConta).to.be.equals(100);
    });

    it('contém o saldo de Custodia da Conta do cliente ', async () => {
      const cliente = await service.getClientByEmailAndPassword('Usuario', 'senhaexemple2');
      const {saldoCustodia} = cliente;
      expect(saldoCustodia).to.be.equals(0);
    });

    it('contém o email de cadastro do cliente ', async () => {
      const cliente = await service.getClientByEmailAndPassword('Usuario', 'senhaexemple2');
      const {emailCliente} = cliente;
      expect(emailCliente).to.be.equals('email@gmail.com');
    });

    it('contém a senha de cadastro do cliente ', async () => {
      const cliente = await service.getClientByEmailAndPassword('Usuario', 'senhateste1');
      const {passwordCliente} = cliente;
      expect(passwordCliente).to.be.equals('senhaexemple2');
    });
  });
});


describe('Testa se a função getClientByEmail', () => {
  before(() => {
    const ExpectReturn = [{
      codCliente: 1,
      nomeCliente: 'Usuario',
      saldoConta: 100,
      saldoCustodia: 0,
      emailCliente: 'email@gmail.com',
      passwordCliente: 'senhaexemple2',
    }];
    sinon.stub(model, 'getClientByEmail').resolves(ExpectReturn);
  });

  after(() => {
    (model.getClientByEmail as sinon.SinonStub).restore();
  });
  describe('retorna um objeto que:', () => {
    it('contém o código do cliente ', async () => {
    const cliente = await service.getClientByEmail('email@gmail.com');
      const {codCliente} = cliente;
      expect(codCliente).to.be.equals(1);
    });

    it('contém o nome do cliente ', async () => {
      const cliente = await service.getClientByEmail('email@gmail.com');
      const {nomeCliente} = cliente;
      expect(nomeCliente).to.be.equals('Usuario');
    });

    it('contém o saldo da Conta do cliente ', async () => {
      const cliente = await service.getClientByEmail('email@gmail.com');
      const {saldoConta} = cliente;
      expect(saldoConta).to.be.equals(100);
    });

    it('contém o saldo de Custodia da Conta do cliente ', async () => {
      const cliente = await service.getClientByEmail('email@gmail.com');
      const {saldoCustodia} = cliente;
      expect(saldoCustodia).to.be.equals(0);
    });

    it('contém o email de cadastro do cliente ', async () => {
      const cliente = await service.getClientByEmail('email@gmail.com');
      const {emailCliente} = cliente;
      expect(emailCliente).to.be.equals('email@gmail.com');
    });

    it('contém a senha de cadastro do cliente ', async () => {
      const cliente = await service.getClientByEmail('email@gmail.com');
      const {passwordCliente} = cliente;
      expect(passwordCliente).to.be.equals('senhaexemple2');
    });
  });
});

