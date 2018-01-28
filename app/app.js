/**
 * 启动文件
 */
const Koa = require("koa");

const app = new Koa();

app.use(async ctx => {
    ctx.body = 'Hello World';
});
  
app.on('error', (err, ctx) => {
    console.log(err)
})

app.listen(3000, () => {
    console.log('service run')
});