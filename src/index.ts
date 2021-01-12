import Koa from 'koa';

const app = new Koa();

// response
app.use((ctx: { body: string; }) => {
  ctx.body = 'Hello Koa';
});

app.listen(3000);
