const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const res = await request(app)
      .post('/ongs')
      .send({
        name: 'PIB',
        email: 'contato@cecf.com',
        whatsapp: '9996484635',
        city: 'Pedreiras',
        uf: 'MA'
      });
    expect(res.body).toHaveProperty('id');
    expect(res.body.id).toHaveLength(8);
  });
});
