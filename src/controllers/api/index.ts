import Koa from 'koa';
import { logging } from '../../configuration/logger';

const apiController = {
  get: (ctx: Koa.Context) => {
    ctx.status = 200;
    ctx.body = 'Hello api controller';
    logging.info('test');
  },
};

export default apiController;
