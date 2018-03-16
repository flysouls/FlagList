const router = require("koa-router")();
router.get('/login', async(ctx, next) => {
  await ctx.render("pages/login",{msg:"router注入数据"})
})
module.exports = router;