import Router from 'koa-router';
import Koa from 'koa';
import { logging } from '../../logger';

const router = new Router();

router.get('/', (ctx: Koa.Context) => {
  ctx.status = 200;
  ctx.body = 'Hello public';
  logging.info('test');
});

export default router.routes();
