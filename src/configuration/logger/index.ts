import logger from 'koa-logger';

const getLoggingTime = (currentDate: Date) => `${currentDate.getFullYear()}/${
  currentDate.getMonth() + 1 > 9 ? currentDate.getMonth() + 1 : `0${currentDate.getMonth() + 1}`}/${
  currentDate.getDate() > 9 ? currentDate.getDate() : `0${currentDate.getDate()}`} ${
  currentDate.getHours() > 9 ? currentDate.getHours() : `0${currentDate.getHours()}`}:${
  currentDate.getMinutes() > 9 ? currentDate.getMinutes() : `0${currentDate.getMinutes()}`}:${
  currentDate.getSeconds() > 9 ? currentDate.getSeconds() : `0${currentDate.getSeconds()}`}`;

const customLogger = logger({
  // transporter: (str, args) => {
  transporter: (str) => {
    const printDate = new Date();
    console.log(getLoggingTime(printDate), printDate.getTime(), '  sys', str);
  },
});

const logging = {
  log: (...args: any) => console.log(getLoggingTime(new Date()), new Date().getTime(), '  log', ...args),
  debug: (...args: any) => console.debug(getLoggingTime(new Date()), new Date().getTime(), 'debug', ...args),
  info: (...args: any) => console.info(getLoggingTime(new Date()), new Date().getTime(), ' info', ...args),
  warn: (...args: any) => console.warn(getLoggingTime(new Date()), new Date().getTime(), 'warn', ...args),
  error: (...args: any) => console.error(getLoggingTime(new Date()), new Date().getTime(), 'error', ...args),
};

export { customLogger, logging };
