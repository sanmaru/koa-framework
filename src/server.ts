import config from './configuration/config';
import { logging } from './configuration/logger';
import app from './app';

console.log('KOA Module Start');

switch (config.env) {
  case 'localhost':
    logging.info(`Listening to http://localhost:${config.port}`);
    break;
  case 'development':
    logging.info(`Listening to https://${config.host}:${config.port}`);
    break;
  case 'product':
    logging.info(`Listening to https://${config.host}:${config.port}`);
    break;
  default:
    logging.info(`Listening to http://127.0.0.1:${config.port}`);
}

const server = app.listen(config.port);
