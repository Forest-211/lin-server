import Koa from 'koa';
import cors from '@koa/cors';
import koaBody from 'koa-body';
import helmet from 'koa-helmet';
import josnUtil from 'koa-json';
import statics from 'koa-static';
import compress from 'koa-compress';
import router from './routes/index';

const app = new Koa();

const isDevMode = process.env.NODE_ENV === 'production' ? false : true;

if (!isDevMode) {
    app.use(compress());
}

app.use(koaBody())
    .use(statics(`${process.cwd()}/public`))
    .use(cors())
    .use(helmet())
    .use(josnUtil({ pretty: false, param: 'pretty' }))
    .use(router());

const port = 3005;
app.listen(port, () => console.log('服务启动在' + port + '端口'));
