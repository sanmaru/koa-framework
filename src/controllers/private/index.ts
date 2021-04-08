import Koa from 'koa';
import { logging } from '../../configuration/logger';

const privateController = (ctx: Koa.Context) => {
  switch (ctx.request.method) {
    case 'GET':
      ctx.status = 200;
      ctx.body = 'Hello private controller';
      logging.info('test');
      break;

    default:
      ctx.status = 404;
      ctx.body = 'Hello private controller 404';
      logging.info('test error');
      break;
  }
};

export default privateController;
