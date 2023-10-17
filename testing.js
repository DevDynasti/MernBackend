const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./server'); 

chai.use(chaiHttp);
const expect = chai.expect;

describe('Authentication Routes', () => {
  it('should register a user', (done) => {
    const newUser = {
      username: 'testuser',
      password: 'testpassword',
    };

    chai
      .request(app)
      .post('/register')
      .send(newUser)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.equal('User registered successfully');
        done();
      });
  });

  it('should login a user', (done) => {
    const userCredentials = {
      username: 'testuser',
      password: 'testpassword',
    };

    chai
      .request(app)
      .post('/login')
      .send(userCredentials)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.equal('User logged in successfully');
        done();
      });
  });
});
