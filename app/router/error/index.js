const routers = require('koa-router')();

routers.get('/error', async(ctx, next) => {
  // await ctx.render("pages/welcome",{msg:"welcomeRouter"})
  await ctx.render("pages/error",{msg:"页面没找到"})
})

module.exports = routers;