/**
 * 启动文件
 */

const path = require('path')
const Koa = require("koa");
const app = new Koa();
const nunjucks = require('nunjucks');
const CONFIG = require('./config');

// 静态文件
const koaStatic = require("koa-static");
app.use(koaStatic(path.join(__dirname, '../static')));

// html模板引擎
const nj = (config = {}) => {
    let { debug = false, ext = "html", path = './', njConfig = {} } = config;
    let env = nunjucks.configure(path, njConfig);
    return async(ctx, next) => {
        ctx.render = (file, data = {}) => {
            return new Promise((resolve, reject) => {
                env.render( file + '.' + ext, data, (err, result) => {
                    if (err) {
                        if (debug) {
                            console.log(err)
                        };
                        result = err.message;
                    }
                    ctx.type = "text/html; charset=utf-8";
                    ctx.body = result;
                    resolve();
                })
            })
        }
        await next();
    }
} 

app.use(nj({
    debug: true,
    ext: 'njk',
    path: path.resolve(__dirname, "../static"),
    njConfig: {
        watch: true
    }
}))

// app.use(ctx => {
//     ctx.body = 'Hello World';
// });


app.on('error', (err, ctx) => {
    console.log(err)
})

//路由
const { login, welcome, help, test } = require("./router");
app.use(login.routes());
app.use(welcome.routes());
app.use(help.routes());
app.use(test.routes());

const port = 3000;
app.listen(port, () => {
    console.log('service run: ' + port)
});