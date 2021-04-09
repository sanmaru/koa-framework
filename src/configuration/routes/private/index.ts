import Router from 'koa-router';
import privateController from '../../../controllers/private';

const router = new Router();

router.get('/', privateController.get);

export default router.routes();
