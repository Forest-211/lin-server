class DemoController {
    constructor() {}

    async demo(ctx) {
        ctx.body = {
            status: 200,
            message: 'success',
            data: {
                title: '搭建blog系统后台服务',
                content: '技术栈koa+mongoDB+redis'
            }
        };
    }
}

export default new DemoController();
