import request from 'supertest';
import app from '../src';

it('index', async () => {
  const query = request(app());
  const res = await query.get('/');
  if (res.error) {
    throw new Error(res.error);
  }
  expect(res.status).toBe(200);
});
