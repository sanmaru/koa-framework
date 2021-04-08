import request from 'supertest';
import app from '../../app';

test('Hello world works', async () => {
  const response = await request(app.callback()).get('/public');
  expect(response.status).toBe(200);
  expect(response.text).toBe('Hello public controller');
});


test('Hello world works', async () => {
  const response = await request(app.callback()).post('/public');
  expect(response.status).toBe(404);
});