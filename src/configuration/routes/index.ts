import Router from 'koa-router';
import Koa from 'koa';
import { logging } from '../logger';

import rtPublic from './public';
import rtPrivate from './private';
import rtApi from './api';

const routes = new Router();

/* router path */
routes.use('/public', rtPublic);
routes.use('/private', rtPrivate);
routes.use('/api', rtApi);

routes.get('/', (ctx: Koa.Context) => {
  ctx.status = 200;
  ctx.body = 'Hello Koa';
  logging.info('test');
});

export default routes;
