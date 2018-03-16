const routers = require('koa-router')();

routers.get('/help', async(ctx, next) => {
  await ctx.render("pages/help",{msg:"helpRouter"})
})

module.exports = routers;