import Koa from 'koa';
import { logging } from '../../configuration/logger';

const apiController = (ctx: Koa.Context) => {
  switch (ctx.request.method) {
    case 'GET':
      ctx.status = 200;
      ctx.body = 'Hello api controller';
      logging.info('test');
      break;

    default:
      ctx.status = 404;
      break;
  }
};

export default apiController;
