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
// app.use(koaStatic(path.join(__dirname, '../static')));
app.use(koaStatic(path.join(__dirname, '../public')));

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
    path: path.resolve(__dirname, "../public/dist/template"),
    njConfig: {
        watch: true
    }
}))

// app.use(ctx => {
//     ctx.body = 'Hello World';
// });
const defaultPage = () => {
    return async(ctx, next) => {
        if(ctx.response.status >= 400){
            ctx.redirect('/firework');
        }
    }
};


//路由
const { login, welcome, help, test, firework, error, resume } = require("./router");
app.use(login.routes());
app.use(welcome.routes());
app.use(help.routes());
app.use(test.routes());
app.use(firework.routes());
app.use(resume.routes());
app.use(error.routes());


app.use(defaultPage());


// app.on('error', (err, ctx) => {
//     console.log(err);
//     setTimeout(ctx.redirect('/firework'),1000)
// })
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

const port = 3000;
app.listen(port, () => {
    console.log('service run: ' + port)
});