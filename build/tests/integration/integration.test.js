"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./config/helpers");
describe('Testes de integração', function () {
    describe('GET /', function () {
        it('Deve retornar Hello!', function (done) {
            helpers_1.request(helpers_1.app)
                .get('/')
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
                helpers_1.expect(res.text).to.be.eql('Hello!');
                done(error);
            });
        });
    });
    describe('GET /api/users', function () {
        it('Deve retornar um json com todos os usuários', function (done) {
            helpers_1.request(helpers_1.app)
                .get('/api/users')
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
    describe('GET /api/users/:id', function () {
        it('Deve retornar um usuário', function (done) {
            helpers_1.request(helpers_1.app)
                .get('/api/users/1')
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
    describe('POST /api/users', function () {
        it('Deve criar um usuário', function (done) {
            var user = {
                nome: 'teste'
            };
            helpers_1.request(helpers_1.app)
                .post('/api/users')
                .send(user)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
    describe('PUT /api/users/:id', function () {
        it('Deve atualizar um usuário', function (done) {
            var user = {
                nome: 'teste update'
            };
            helpers_1.request(helpers_1.app)
                .put('/api/users/1')
                .send(user)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
    describe('DELETE /api/users/:id', function () {
        it('Deve deletar um usuário', function (done) {
            helpers_1.request(helpers_1.app)
                .delete('/api/users/1')
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
});
