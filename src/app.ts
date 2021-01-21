import Koa from 'koa';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();

router.get('/', (ctx: Koa.Context) => {
  ctx.status = 200;
  ctx.body = 'Hello Koa';
});

app.use(router.routes());

export default app;
