const request = require('supertest');
const app = require('../app');

const { setupTestDatabase } = require('./setupTestDatabase');

beforeAll(async () => {
  // Setup the test database before running any tests
  await setupTestDatabase();
});

describe('Parcel API', () => {
  it('should create a new parcel', async () => {
    const res = await request(app)
      .post('/parcel')
      .send({ name: 'Sample Parcel' });

    expect(res.status).toBe(201);
    expect(res.body.name).toBe('Sample Parcel');
  });
});

describe('Parcel API Get', () => {
  it('should retrieve parcel', async () => {
    const res = await request(app)
      .get('/parcel');

    expect(res.status).toBe(200);
    expect(res.body).toEqual([{ "id": 1, "name": "Sample Parcel" }]);
  });
});
