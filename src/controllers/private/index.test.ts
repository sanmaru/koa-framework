import request from 'supertest';
import app from '../../app';

test('call private by get', async () => {
  const response = await request(app.callback()).get('/private');
  expect(response.status).toBe(200);
  expect(response.text).toBe('Hello private controller');
});

test('call private by post', async () => {
  const response = await request(app.callback()).post('/private');
  expect(response.status).toBe(404);
  expect(response.text).toBe('Not Found');
});
