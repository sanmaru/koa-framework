import request from 'supertest';
import app from '../../app';

test('call api by get', async () => {
  const response = await request(app.callback()).get('/api');
  expect(response.status).toBe(200);
  expect(response.text).toBe('Hello api controller');
});

test('call api by post', async () => {
  const response = await request(app.callback()).post('/api');
  expect(response.status).toBe(404);
  expect(response.text).toBe('Not Found');
});
