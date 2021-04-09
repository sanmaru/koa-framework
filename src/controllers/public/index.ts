import Koa from 'koa';
import { logging } from '../../configuration/logger';

const publicController = {
  get: (ctx: Koa.Context) => {
    ctx.status = 200;
    ctx.body = 'Hello public controller';
  },
};

export default publicController;
