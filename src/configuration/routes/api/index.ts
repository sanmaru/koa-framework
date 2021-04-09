import Router from 'koa-router';
import apiController from '../../../controllers/api';

const router = new Router();

router.get('/', apiController.get);

export default router.routes();
