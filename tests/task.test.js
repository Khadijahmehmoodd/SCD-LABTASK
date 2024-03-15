const supertest = require('supertest');
const app = require('../app'); 
const request = supertest(app);

// this is just 1 test i can add more according to the tsk description maam
describe('Task API', () => {
  it('GET /tasks — should return all tasks', async () => {
    const response = await request.get('/tasks');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });

});
