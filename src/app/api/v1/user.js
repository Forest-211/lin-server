import Router from '@koa/router';
import User from '../../controller/user';

const router = new Router({ prefix: '/api/v2' });

router.get('/user', User.user);

export default router;
