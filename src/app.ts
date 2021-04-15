import Koa from 'koa';
import { customLogger } from './configuration/logger';
import routes from './configuration/routes';
import cors from './configuration/cors';

const app = new Koa();

// koa-logger 설정은 순서가 중요함 router 아래로 갈 경우 로그를 출력하지 않음
app.use(customLogger);

// CORS 설정 (배열로 설정되어 있다)
app.use(cors);

app.proxy = true;

app.use(routes.routes());

export default app;
