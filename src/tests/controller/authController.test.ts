import {expect} from 'chai';
import authentication from '../../controller/authcontroller';
import authservice from '../../service/authentication.service';
import sinon from 'sinon';

describe('Testa se a função authentication', () => {
  const mockresult = {
    status: 200,
    response: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
  };
  const request: any = {};
  const response: any = {};
  beforeEach(() => {
    const expect = mockresult;
    request.body = {
      email:"xablautest@blau.com",
      password: "senhateste2"
    };
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns({token: expect.response});
    sinon.stub(authservice, 'authentication').resolves(expect);
  });
  afterEach(() => {
    (authservice.authentication as sinon.SinonStub).restore();
  });
  it('é chamado o status com o código 200', async () => {
    await authentication(request, response);
    expect(request.body).to.have.keys('email', 'password');
    expect(response.status.calledWith(200)).to.be.true;
  });
  it('é chamado o json com as informações do token', async () => {
    await authentication(request, response);
    expect(response.json.calledWith({token: mockresult.response})).to.be.true;
  });
})