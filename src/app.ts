import Koa from 'koa';
import { customLogger, logging } from './configuration/logger';
import routes from './configuration/routes';

const app = new Koa();

// koa-logger 설정은 순서가 중요함 router 아래로 갈 경우 로그를 출력하지 않음
app.use(customLogger);
app.use(routes.routes());

export default app;
