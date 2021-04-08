import request from 'supertest';
import app from '../../app';

test('Hello world works', async () => {
  const response = await request(app.callback()).get('/private');
  expect(response.status).toBe(200);
  expect(response.text).toBe('Hello private controller');
});


test('Hello world works', async () => {
  const response = await request(app.callback()).post('/private');
  expect(response.status).toBe(404);
});