const Koa = require('koa')
const app = new Koa()

app.use((ctx)=>{

  ctx.body = `index page`
})


app.listen(8080)
console.log('[demo] route-use-middleware is starting at port 8080')