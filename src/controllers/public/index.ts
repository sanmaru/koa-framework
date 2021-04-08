import Koa from 'koa';
import { logging } from '../../configuration/logger';

const publicController = (ctx: Koa.Context) => {
  switch (ctx.request.method) {
    case 'GET':
      ctx.status = 200;
      ctx.body = 'Hello public controller';
      logging.info('test');
      break;

    default:
      ctx.status = 404;
      break;
  }
};

export default publicController;
