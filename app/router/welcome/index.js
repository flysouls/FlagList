const routers = require('koa-router')();

routers.get('/welcome', async(ctx, next) => {
  let text = `生活就像在黑屋子里洗衣服，你不知道洗干净没有，只能一遍一遍的洗。<br>直到那一天到来，你会发现认真洗过的衣服很干净，以后你每次穿都会感谢当初洗衣服的日子。`
  let title = `欢迎来到马乐的个人网站`
  await ctx.render("pages/helloworld",{text,title})
})

module.exports = routers;