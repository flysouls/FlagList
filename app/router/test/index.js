const router = require("koa-router")();
router.get('/test', async(ctx, next) => {
  await ctx.render("pages/test", {msg:'router注入'});
})
module.exports = router;