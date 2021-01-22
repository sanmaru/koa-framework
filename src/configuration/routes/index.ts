import Router from 'koa-router';
import Koa from 'koa';
import logger from 'koa-logger';

const routes = new Router();

routes.get('/', (ctx: Koa.Context) => {
  ctx.status = 200;
  ctx.body = 'Hello Koa2';
});

export default routes;
