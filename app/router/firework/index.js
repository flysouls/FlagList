const routers = require('koa-router')();

routers.get('/firework', async(ctx, next) => {
  await ctx.render("pages/firework",{msg:"焰火"})
})

module.exports = routers;