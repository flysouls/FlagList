const routers = require('koa-router')();

routers.get('/welcome', async(ctx, next) => {
  // await ctx.render("pages/welcome",{msg:"welcomeRouter"})
  await ctx.render("pages/helloworld",{msg:"welcomeRouter"})
})

module.exports = routers;