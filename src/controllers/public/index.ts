import Koa from 'koa';
import { logging } from '../../configuration/logger';

const publicController = (ctx: Koa.Context) => {
  switch (ctx.request.method) {
    case 'GET':
      ctx.status = 200;
      ctx.body = 'Hello public controller2';
      logging.info('test');
      break;

    default:
      ctx.status = 404;
      ctx.body = 'Hello public controller 404';
      logging.info('test error');
      break;
  }
};

export default publicController;
