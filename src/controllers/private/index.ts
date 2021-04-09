import Koa from 'koa';
import { logging } from '../../configuration/logger';

const privateController = {
  get: (ctx: Koa.Context) => {
    ctx.status = 200;
    ctx.body = 'Hello private controller';
    logging.info('test');
  },
};

export default privateController;
