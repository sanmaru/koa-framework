import config from './config';
import app from './app';

console.log('KOA Module Start');

if(config.env === 'localhost') console.log( 'http://' + config.host + ':' + config.port );
//console.info(`Listening to http://localhost:${port});

const server = app.listen(config.port);