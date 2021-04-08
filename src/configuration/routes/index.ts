import Router from 'koa-router';
import Koa from 'koa';
import { logging } from '../logger';

import rt_public from './public';
import rt_private from './private';
import rt_api from './api';


const routes = new Router();


/* router path */
routes.use('/public', rt_public);
routes.use('/private', rt_private);
routes.use('/api', rt_api);

routes.get('/', (ctx: Koa.Context) => {
  ctx.status = 200;
  ctx.body = 'Hello Koa';
  logging.info('test');
});


export default routes;
