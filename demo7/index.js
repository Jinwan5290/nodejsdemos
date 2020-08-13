const { log } = console
const names = require('./lib/names')
const { EventEmitter } = require('events')

class Emitter extends EventEmitter {}

const emitter = new Emitter()

;['search', 'choose', 'find', 'download'].forEach(key => {
  const fn = require(`./lib/${key}`)
  emitter.on(key, async function (...args) {
    const res = await fn(...args)
    this.emit('handler', key, res, ...args)
  })
})

emitter.on('afterSearch', function (data, q) {
  if (!data || !data.result || !data.result.songs) {
    log(`没搜索到${q}的相关结果`)
    return process.exit(1)
  }
  const songs = data.result.songs
  this.emit('choose', songs)
})

emitter.on('afterChoose', function (answer, songs) {
  const arr = songs.filter((item, i) => {
    return names(item, i) === answer.song
  })
  // console.log(arr, songs)
  if (arr[0] && arr[0].id) {
    this.emit('find', arr[0], answer.song)
  }
})

emitter.on('afterFind', function ({ song, res, findName }) {
  if (res[0] && res[0].url) {
    this.emit('download', { song, res: res[0], findName })
  }
})

emitter.on('downloadEnd', function () {
  log('下载结束')
  process.exit()
})

emitter.on('handler', function (key, res, ...args) {
  switch (key) {
    case 'search':
      return this.emit('afterSearch', res, args[0])
    case 'choose':
      return this.emit('afterChoose', res, args[0])
    case 'find':
      return this.emit('afterFind', res)
    case 'download':
      return this.emit('downloadEnd', res)
    default:
      break
  }
})
module.exports = emitter
