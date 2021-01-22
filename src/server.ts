import config from './configuration/config';
import app from './app';

console.log('KOA Module Start');

switch (config.env) {
  case 'localhost':
    console.info(`Listening to http://localhost:${config.port}`);
    break;
  case 'development':
    console.info(`Listening to https://${config.host}:${config.port}`);
    break;
  case 'product':
    console.info(`Listening to https://${config.host}:${config.port}`);
    break;
  default:
    console.info(`Listening to http://127.0.0.1:${config.port}`);
}

const server = app.listen(config.port);
