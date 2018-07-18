const router = require("koa-router")();
router.get('/test', async(ctx, next) => {
  await ctx.render("pages/test", {msg:'Vuex'});
})
module.exports = router;