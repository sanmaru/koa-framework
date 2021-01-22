import Router from 'koa-router';
import Koa from 'koa';
import { logging } from '../logger';

const routes = new Router();

routes.get('/', (ctx: Koa.Context) => {
  ctx.status = 200;
  ctx.body = 'Hello Koa';
});

export default routes;
