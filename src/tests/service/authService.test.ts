import {expect} from 'chai';
import auth from '../../service/authentication.service';
import sinon from 'sinon';


describe('Testa se a função authentication', () => {
  before(() => {
    const ExpectReturn = {
      status: 200,
      response: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    };
    sinon.stub(auth, 'authentication').resolves(ExpectReturn);
  });

  after(() => {
    (auth.authentication as sinon.SinonStub).restore();
  });

  describe('retorna um objeto que:', () => {
    it('contém o status 200', async () => {
      const {status} = await auth.authentication('email@email.com', 'senhasenha2');
      expect(status).to.be.equals(200);
    })
    it('contém um objeto response com o token', async () => {
      const {response} = await auth.authentication('email@email.com', 'senhasenha2');
      expect(response).to.be.equals('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9');
    })
  })
});