import Router from '@koa/router';
import requireDirectory from 'require-directory';

const apiDirectory = `${process.cwd()}/src/app/api`;
function initLoadRouter(app) {
    requireDirectory(module, apiDirectory, {
        visit({default: obj}) {
            if (obj instanceof Router) {
                app.use(obj.routes());
            }
        }
    });
}

export default initLoadRouter;
