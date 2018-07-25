const router = require("koa-router")();
router.get('/resume', async(ctx, next) => {
  await ctx.render("pages/resume",{title:"我的简历"})
})
module.exports = router;