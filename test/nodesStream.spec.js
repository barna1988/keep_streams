const chai = require('chai');
const expect = chai.expect();
const app = require('../app');
const config = require('./testConfig');
const supertest = require('supertest');

describe('Streams Test', () => {
    it('Read notes as Stream', (done) => {
        request(app)
        .get(`/api/v1/notes`)
        .send(config.USER_ID)
        .expect(200)
        .then((response) => {
            expect(response.body).to.have.property('notes');
            done();
        });
    });

    it('add notes as stream to DB', (done) => {
        done();
    });
});