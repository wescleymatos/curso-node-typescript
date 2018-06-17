import { app, request, expect } from './config/helpers';

describe('Testes de integração', () => {

  describe('GET /', () => {
    it('Deve retornar Hello!', done => {
      request(app)
        .get('/')
        .end((error, res) => {
          expect(res.status).to.equal(200)
          expect(res.text).to.be.eql('Hello!');

          done(error);
        });
    });
  });

  describe('GET /api/users', () => {
    it('Deve retornar um json com todos os usuários', done => {
      request(app)
        .get('/api/users')
        .end((error, res) => {
          expect(res.status).to.equal(200);
        });
    });
  });

  describe('GET /api/users/:id', () => {
    it('Deve retornar um usuário', done => {
      request(app)
        .get('/api/users/1')
        .end((error, res) => {
          expect(res.status).to.equal(200);
        });
    });
  });

  describe('POST /api/users', () => {
    it('Deve criar um usuário', done => {
      const user = {
        nome: 'teste'
      };

      request(app)
        .post('/api/users')
        .send(user)
        .end((error, res) => {
          expect(res.status).to.equal(200);
        });
    });
  });

  describe('PUT /api/users/:id', () => {
    it('Deve atualizar um usuário', done => {
      const user = {
        nome: 'teste update'
      };

      request(app)
        .put('/api/users/1')
        .send(user)
        .end((error, res) => {
          expect(res.status).to.equal(200);
        });
    });
  });

  describe('DELETE /api/users/:id', () => {
    it('Deve deletar um usuário', done => {
      request(app)
        .delete('/api/users/1')
        .end((error, res) => {
          expect(res.status).to.equal(200);
        });
    });
  });

});
