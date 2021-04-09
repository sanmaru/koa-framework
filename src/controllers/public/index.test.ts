import request from 'supertest';
import app from '../../app';

test('call public by get', async () => {
  const response = await request(app.callback()).get('/public');
  expect(response.status).toBe(200);
  expect(response.text).toBe('Hello public controller');
});

test('call public by post', async () => {
  const response = await request(app.callback()).post('/public');
  expect(response.status).toBe(404);
  expect(response.text).toBe('Not Found');
});
