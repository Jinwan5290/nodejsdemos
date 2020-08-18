const Koa = require('koa')
const path = require('path')
const Router = require('koa-router')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const app = new Koa()

const router = new Router()

const adapter = new FileSync(path.resolve(__dirname, './db.json'))

const db = low(adapter)

db.defaults({ visits: [], count: 0 }).write()

router.get('/', async (ctx, next) => {
  const ip = ctx.header['x-real-ip']
  const { user, page, action } = ctx.query

  db.get('visits')
    .push({ ip, user, page, action })
    .write()
  db.update('count', n => n + 1).write()

  ctx.body = { success: 1, visits: db.get('count') }
})

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(7000)
