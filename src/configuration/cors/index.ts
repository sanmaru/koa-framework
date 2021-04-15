import Koa from 'koa';
import cors from '@koa/cors';

const origins: string[] = [
  'http://localhost:4000',
];

const verifyOrigin = (ctx: Koa.Context): string => {
  if (origins.indexOf(ctx.request.header.origin) > -1) {
    return ctx.request.header.origin;
  }
  return '';
};

const corsSet = cors({
  origin: verifyOrigin,
  credentials: true,
});

export default corsSet;
