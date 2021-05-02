import Router from '@koa/router';
import Demo from '../controller/demo';

const router = new Router({ prefix: '/api/v1' });

router.get('/demo', Demo.demo);

export default router;
