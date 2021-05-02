import Router from '@koa/router';
import combineRoutes from 'koa-combine-routers';
import requireDirectory from 'require-directory';

const apiDirectory = `${process.cwd()}/src/app/api`;
let ret;
requireDirectory(module, apiDirectory, {
    visit(obj) {
        if (obj.default instanceof Router) {
            ret = obj.default
        }
    }
});

export default combineRoutes(ret);
