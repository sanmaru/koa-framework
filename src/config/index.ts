import dotenv from "dotenv";

dotenv.config();

const env: string = process.env.NODE_ENV || "localhost";

const configs: any = {
  base: {
    env,
    name: process.env.APP_NAME || 'koa-framework',
    host: process.env.APP_HOST || '127.0.0.1',
    port: 8000,
  },
  localhost: {
    port: 3000,
  },
  development: {
    port: 4000,
  },
  product: {
    port: 4000,
  },
};
const config = Object.assign(configs.base, configs[env]);

export default config;
