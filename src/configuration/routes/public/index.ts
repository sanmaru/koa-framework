import Router from 'koa-router';
import publicController from '../../../controllers/public';

const router = new Router();

router.get('/', publicController.get);

export default router.routes();
