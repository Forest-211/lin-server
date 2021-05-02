class UserController {
    constructor() {}

    async user(ctx) {
        ctx.body = {
            status: 200,
            message: 'success',
            data: {
                title: '获取用户信息'
            }
        };
    }
}


export default new UserController()
