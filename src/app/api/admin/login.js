import Router from '@koa/router';

const router = new Router({ prefix: '/api/admin' });

router.get('/login', async (ctx) => {
    ctx.body = {
        status: 200,
        message: 'success',
        data: {
            title: '这是后台管理系统的后台服务'
        }
    };
});

export default router;
